import React, { useState } from 'react';
import { Calculator, RotateCcw, Info, Percent, Sparkles, BookOpen } from 'lucide-react';
import { handbookSections } from '../handbookData';

// Get grading ranges from data to keep values aligned
const gradingScale = [
  { min: 96, max: 100, point: '1.00', input: 'A+', desc: 'Excellent', color: 'bg-emerald-500 text-white border-emerald-600' },
  { min: 91, max: 95.99, point: '1.25', input: 'A', desc: 'Very Good', color: 'bg-emerald-400 text-white border-emerald-500' },
  { min: 86, max: 90.99, point: '1.50', input: 'A-', desc: 'Very Good', color: 'bg-emerald-400/90 text-white border-emerald-500' },
  { min: 81, max: 85.99, point: '1.75', input: 'B+', desc: 'Good', color: 'bg-blue-500 text-white border-blue-600' },
  { min: 75, max: 80.99, point: '2.00', input: 'B', desc: 'Good', color: 'bg-blue-400 text-white border-blue-500' },
  { min: 69, max: 74.99, point: '2.25', input: 'B-', desc: 'Good', color: 'bg-indigo-400 text-white border-indigo-500' },
  { min: 63, max: 68.99, point: '2.50', input: 'C+', desc: 'Fair', color: 'bg-amber-500 text-white border-amber-600' },
  { min: 57, max: 62.99, point: '2.75', input: 'C', desc: 'Fair', color: 'bg-amber-400 text-white border-amber-500' },
  { min: 50, max: 56.99, point: '3.00', input: 'C-', desc: 'Fair', color: 'bg-amber-400/80 text-white border-amber-500' },
  { min: 0, max: 49.99, point: '5.00', input: 'F', desc: 'Failed', color: 'bg-red-500 text-white border-red-600' },
];

export function getGradeEquivalent(score: number) {
  return gradingScale.find(g => score >= g.min && score <= g.max) || {
    point: '5.00',
    input: 'F',
    desc: 'Failed',
    color: 'bg-red-500 text-white'
  };
}

export default function GradeCalculator() {
  const [mode, setMode] = useState<'quick' | 'detailed'>('quick');
  const [classType, setClassType] = useState<'lecture' | 'lab'>('lecture');

  // Quick mode states (direct percentages)
  const [prelimPct, setPrelimPct] = useState<number>(85);
  const [midtermPct, setMidtermPct] = useState<number>(85);
  const [prefinalPct, setPrefinalPct] = useState<number>(85);
  const [finalPct, setFinalPct] = useState<number>(85);

  // Detailed mode states (Prelim, Midterm, Prefinal, Final breakdowns)
  const [detailedGrades, setDetailedGrades] = useState({
    prelim: { lecQuizzes: '', lecParticipation: '', lecExam: '', labExp: '', labParticipation: '', labExam: '' },
    midterm: { lecQuizzes: '', lecParticipation: '', lecExam: '', labExp: '', labParticipation: '', labExam: '' },
    prefinal: { lecQuizzes: '', lecParticipation: '', lecExam: '', labExp: '', labParticipation: '', labExam: '' },
    final: { lecQuizzes: '', lecParticipation: '', lecExam: '', labExp: '', labParticipation: '', labExam: '' },
  });

  const handleReset = () => {
    setPrelimPct(85);
    setMidtermPct(85);
    setPrefinalPct(85);
    setFinalPct(85);
    setDetailedGrades({
      prelim: { lecQuizzes: '', lecParticipation: '', lecExam: '', labExp: '', labParticipation: '', labExam: '' },
      midterm: { lecQuizzes: '', lecParticipation: '', lecExam: '', labExp: '', labParticipation: '', labExam: '' },
      prefinal: { lecQuizzes: '', lecParticipation: '', lecExam: '', labExp: '', labParticipation: '', labExam: '' },
      final: { lecQuizzes: '', lecParticipation: '', lecExam: '', labExp: '', labParticipation: '', labExam: '' },
    });
  };

  // Calculate detailed term grade
  const calculateDetailedTermGrade = (period: 'prelim' | 'midterm' | 'prefinal' | 'final') => {
    const data = detailedGrades[period];
    
    // Parse values or fallback to default 0
    const lQuiz = parseFloat(data.lecQuizzes) || 0;
    const lPart = parseFloat(data.lecParticipation) || 0;
    const lExam = parseFloat(data.lecExam) || 0;

    // Lecture Term Grade = 40% quizzes + 10% class participation + 50% major exam
    const lectureGrade = (lQuiz * 0.4) + (lPart * 0.1) + (lExam * 0.5);

    if (classType === 'lecture') {
      return Math.min(100, Math.max(0, lectureGrade));
    } else {
      const lbExp = parseFloat(data.labExp) || 0;
      const lbPart = parseFloat(data.labParticipation) || 0;
      const lbExam = parseFloat(data.labExam) || 0;

      // Lab Term Grade = 40% experiments + 10% class participation + 50% major exam
      const labGrade = (lbExp * 0.4) + (lbPart * 0.1) + (lbExam * 0.5);

      // Total Period Grade = 40% Lecture + 60% Lab (since lecture is 40% and lab is 60%)
      const totalGrade = (lectureGrade * 0.4) + (labGrade * 0.6);
      return Math.min(100, Math.max(0, totalGrade));
    }
  };

  // Get active final percentage
  let finalPercentage = 0;
  let computedPrelim = 0;
  let computedMidterm = 0;
  let computedPrefinal = 0;
  let computedFinal = 0;

  if (mode === 'quick') {
    computedPrelim = prelimPct;
    computedMidterm = midtermPct;
    computedPrefinal = prefinalPct;
    computedFinal = finalPct;
    // Formula: 20% Prelim + 20% Midterm + 20% Prefinal + 40% Final
    finalPercentage = (prelimPct * 0.2) + (midtermPct * 0.2) + (prefinalPct * 0.2) + (finalPct * 0.4);
  } else {
    computedPrelim = calculateDetailedTermGrade('prelim');
    computedMidterm = calculateDetailedTermGrade('midterm');
    computedPrefinal = calculateDetailedTermGrade('prefinal');
    computedFinal = calculateDetailedTermGrade('final');
    finalPercentage = (computedPrelim * 0.2) + (computedMidterm * 0.2) + (computedPrefinal * 0.2) + (computedFinal * 0.4);
  }

  // Rounding for UI
  const displayPrelim = Math.round(computedPrelim * 100) / 100;
  const displayMidterm = Math.round(computedMidterm * 100) / 100;
  const displayPrefinal = Math.round(computedPrefinal * 100) / 100;
  const displayFinal = Math.round(computedFinal * 100) / 100;
  const displayFinalPct = Math.round(finalPercentage * 100) / 100;

  const resultEquivalent = getGradeEquivalent(finalPercentage);

  const handleDetailedChange = (
    period: 'prelim' | 'midterm' | 'prefinal' | 'final',
    field: string,
    value: string
  ) => {
    // Keep it within range 0-100 or empty
    if (value !== '') {
      const num = parseFloat(value);
      if (isNaN(num) || num < 0 || num > 100) return;
    }
    setDetailedGrades(prev => ({
      ...prev,
      [period]: {
        ...prev[period],
        [field]: value
      }
    }));
  };

  return (
    <div id="grade-calculator" className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-700 to-navy-800 px-6 py-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <Calculator className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">Academic Grade Estimator</h3>
            <p className="text-xs text-navy-100">Calculate final trimester marks using ACLC formulas</p>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-all rounded-lg text-xs font-medium cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Latest Grading System Disclaimer Banner */}
      <div className="bg-indigo-50 border-b border-indigo-100 px-6 py-3 flex gap-2.5 items-start">
        <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
        <div className="text-xs text-indigo-800 leading-relaxed">
          <span className="font-bold">Latest Grading System Active:</span> This estimator uses the updated ACLC grading weights: <strong className="font-semibold">Prelim (20%)</strong>, <strong className="font-semibold">Midterm (20%)</strong>, <strong className="font-semibold">Prefinals (20%)</strong>, and <strong className="font-semibold">Finals (40%)</strong>, with <strong className="font-semibold">Lecture at 40%</strong> and <strong className="font-semibold">Laboratory at 60%</strong> overall. Note that the outdated 2015 student handbook grading guidelines do not contain the Prefinal period.
        </div>
      </div>

      <div className="p-6">
        {/* Toggle selectors */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 pb-6 border-b border-slate-200">
          {/* Quick vs Detailed */}
          <div className="flex-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Calculation Style</label>
            <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setMode('quick')}
                className={`py-2 text-xs font-medium rounded-lg transition-all ${mode === 'quick' ? 'bg-white text-navy-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Quick Slider Mode
              </button>
              <button
                onClick={() => setMode('detailed')}
                className={`py-2 text-xs font-medium rounded-lg transition-all ${mode === 'detailed' ? 'bg-white text-navy-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Detailed Score Entry
              </button>
            </div>
          </div>

          {/* Class Type */}
          <div className="flex-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Class Structure</label>
            <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setClassType('lecture')}
                className={`py-2 text-xs font-medium rounded-lg transition-all ${classType === 'lecture' ? 'bg-white text-navy-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Lecture Only
              </button>
              <button
                onClick={() => setClassType('lab')}
                className={`py-2 text-xs font-medium rounded-lg transition-all ${classType === 'lab' ? 'bg-white text-navy-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Lecture + Lab
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Entry Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Input Panel */}
          <div className="lg:col-span-8 space-y-6">
            
            {mode === 'quick' ? (
              /* Quick Mode sliders */
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-navy-500"></span>
                      Prelim Period Grade (20%)
                    </span>
                    <span className="font-mono text-sm font-bold text-navy-700 bg-navy-50 px-2 py-0.5 rounded-md">
                      {prelimPct}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={prelimPct}
                    onChange={(e) => setPrelimPct(parseInt(e.target.value))}
                    className="w-full accent-navy-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>50% (Passing starts at 50% / 3.0)</span>
                    <span>100%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-navy-600"></span>
                      Midterm Period Grade (20%)
                    </span>
                    <span className="font-mono text-sm font-bold text-navy-700 bg-navy-50 px-2 py-0.5 rounded-md">
                      {midtermPct}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={midtermPct}
                    onChange={(e) => setMidtermPct(parseInt(e.target.value))}
                    className="w-full accent-navy-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                      Prefinal Period Grade (20%)
                    </span>
                    <span className="font-mono text-sm font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {prefinalPct}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={prefinalPct}
                    onChange={(e) => setPrefinalPct(parseInt(e.target.value))}
                    className="w-full accent-indigo-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-aclc-red"></span>
                      Final Period Grade (40%)
                    </span>
                    <span className="font-mono text-sm font-bold text-aclc-red bg-red-50 px-2 py-0.5 rounded-md font-semibold">
                      {finalPct}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={finalPct}
                    onChange={(e) => setFinalPct(parseInt(e.target.value))}
                    className="w-full accent-aclc-red h-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Detailed Score Entry Mode */
              <div className="space-y-6">
                <div className="bg-slate-50 p-3 rounded-lg flex gap-2 items-start text-xs text-slate-600 border border-slate-100">
                  <Info className="w-4 h-4 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-navy-800">Formula breakdown:</span> Quizzes weight <strong>40%</strong>, Class Participation weights <strong>10%</strong>, and Major Exams weight <strong>50%</strong>. Grades are automatically computed for each trimester.
                  </div>
                </div>

                {/* Grid for Prelim, Midterm, Prefinal, Final blocks */}
                <div className="space-y-6">
                  {/* Period Block Generator */}
                  {(['prelim', 'midterm', 'prefinal', 'final'] as const).map((period) => (
                    <div key={period} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                      <div className="bg-slate-100/80 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center">
                        <span className="font-display font-semibold text-xs uppercase tracking-wider text-slate-700">
                          {period} term period {period === 'final' ? '(40% Weight)' : '(20% Weight)'}
                        </span>
                        <span className="font-mono text-xs text-navy-600 font-bold bg-white px-2 py-0.5 rounded shadow-sm">
                          Period Grade: {Math.round(calculateDetailedTermGrade(period) * 100) / 100}%
                        </span>
                      </div>

                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Lecture Column */}
                        <div className="space-y-3">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-700 flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            Lecture Scores (40% weight if Lab)
                          </h4>

                          <div className="grid grid-cols-3 gap-2">
                            <div>
                              <label className="text-[10px] font-medium text-slate-500 block mb-1">Quizzes (40%)</label>
                              <input
                                type="number"
                                placeholder="0-100"
                                value={detailedGrades[period].lecQuizzes}
                                onChange={(e) => handleDetailedChange(period, 'lecQuizzes', e.target.value)}
                                className="w-full text-xs font-mono p-2 border border-slate-200 rounded focus:border-navy-500 focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-slate-500 block mb-1">Partic. (10%)</label>
                              <input
                                type="number"
                                placeholder="0-100"
                                value={detailedGrades[period].lecParticipation}
                                onChange={(e) => handleDetailedChange(period, 'lecParticipation', e.target.value)}
                                className="w-full text-xs font-mono p-2 border border-slate-200 rounded focus:border-navy-500 focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-slate-500 block mb-1">Exam (50%)</label>
                              <input
                                type="number"
                                placeholder="0-100"
                                value={detailedGrades[period].lecExam}
                                onChange={(e) => handleDetailedChange(period, 'lecExam', e.target.value)}
                                className="w-full text-xs font-mono p-2 border border-slate-200 rounded focus:border-navy-500 focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Laboratory Column (Only if Lab active) */}
                        {classType === 'lab' ? (
                          <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-4">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Laboratory Scores (60% weight)
                            </h4>

                            <div className="grid grid-cols-3 gap-2">
                              <div>
                                <label className="text-[10px] font-medium text-slate-500 block mb-1">Expts (40%)</label>
                                <input
                                  type="number"
                                  placeholder="0-100"
                                  value={detailedGrades[period].labExp}
                                  onChange={(e) => handleDetailedChange(period, 'labExp', e.target.value)}
                                  className="w-full text-xs font-mono p-2 border border-slate-200 rounded focus:border-amber-500 focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] font-medium text-slate-500 block mb-1">Partic. (10%)</label>
                                <input
                                  type="number"
                                  placeholder="0-100"
                                  value={detailedGrades[period].labParticipation}
                                  onChange={(e) => handleDetailedChange(period, 'labParticipation', e.target.value)}
                                  className="w-full text-xs font-mono p-2 border border-slate-200 rounded focus:border-amber-500 focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] font-medium text-slate-500 block mb-1">Exam (50%)</label>
                                <input
                                  type="number"
                                  placeholder="0-100"
                                  value={detailedGrades[period].labExam}
                                  onChange={(e) => handleDetailedChange(period, 'labExam', e.target.value)}
                                  className="w-full text-xs font-mono p-2 border border-slate-200 rounded focus:border-amber-500 focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center p-3 bg-slate-50 rounded-lg text-xs text-slate-400 border border-dashed border-slate-200">
                            No laboratory component for this class structure
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Results Display Panel */}
          <div className="lg:col-span-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1">
                <Percent className="w-3.5 h-3.5 text-navy-600" />
                Calculation Results
              </h4>

              {/* Final Grade Indicator */}
              <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm text-center mb-4">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Final Average Score</p>
                <div className="text-4xl font-display font-extrabold text-navy-800 my-1 font-mono">
                  {displayFinalPct}%
                </div>
                <p className="text-[10px] text-slate-400">
                  Formula: (P × 20%) + (M × 20%) + (PF × 20%) + (F × 40%)
                </p>
              </div>

              {/* Equiv details */}
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">GPA Equivalent</p>
                    <p className="text-xl font-display font-extrabold text-slate-800 mt-0.5">{resultEquivalent.point}</p>
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg text-sm font-bold border ${resultEquivalent.color}`}>
                    {resultEquivalent.input}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Standing Description</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">{resultEquivalent.desc}</p>
                </div>
              </div>

              {/* History scale mapping highlights */}
              <div className="mt-4 border-t border-slate-200/60 pt-4">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Equivalent Trimester Scores</h5>
                <div className="grid grid-cols-4 gap-1.5 text-[10.5px] text-center font-mono">
                  <div className="bg-white p-1.5 rounded border border-slate-200/50">
                    <span className="text-slate-400 block mb-0.5 text-[9px]">Prelim</span>
                    <span className="text-slate-700 font-bold text-xs">{displayPrelim}%</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-slate-200/50">
                    <span className="text-slate-400 block mb-0.5 text-[9px]">Midterm</span>
                    <span className="text-slate-700 font-bold text-xs">{displayMidterm}%</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-slate-200/50">
                    <span className="text-slate-400 block mb-0.5 text-[9px]">Prefinal</span>
                    <span className="text-slate-700 font-bold text-xs">{displayPrefinal}%</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-slate-200/50">
                    <span className="text-slate-400 block mb-0.5 text-[9px]">Final</span>
                    <span className="text-slate-700 font-bold text-xs">{displayFinal}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60">
              {parseFloat(resultEquivalent.point) <= 3.0 ? (
                <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl text-xs border border-emerald-100 flex gap-2">
                  <span className="text-base">🎉</span>
                  <div>
                    <span className="font-semibold">Passing Grade!</span> Your grade satisfies standard college requirements. Maintain a term GPA of 2.75 for Good Standing.
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 text-red-800 p-3 rounded-xl text-xs border border-red-100 flex gap-2 animate-pulse-highlight">
                  <span className="text-base">⚠️</span>
                  <div>
                    <span className="font-semibold">Failing Equivalent.</span> Final average under 50% constitutes a failing grade of 5.0. Speak to your instructor for remediation options.
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
