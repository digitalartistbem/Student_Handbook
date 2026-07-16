import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, FileText, Landmark, ShieldCheck, HelpCircle, Info } from 'lucide-react';
import { handbookScholarships, Scholarship } from '../handbookData';

export default function ScholarshipChecker() {
  const [studentType, setStudentType] = useState<'freshman' | 'enrolled'>('freshman');
  
  // Freshman Inputs
  const [hsGrade, setHsGrade] = useState<string>('88');
  const [hasBelow80, setHasBelow80] = useState<boolean>(false);
  const [region, setRegion] = useState<'NCR' | 'Provincial'>('Provincial');
  const [income, setIncome] = useState<string>('65000');

  // Enrolled Student Inputs
  const [residencyYear, setResidencyYear] = useState<'less' | 'more'>('more');
  const [unitsLoaded, setUnitsLoaded] = useState<string>('18');
  const [collegeGpa, setCollegeGpa] = useState<string>('1.35');
  const [hasBelow30, setHasBelow30] = useState<boolean>(false);
  const [hasDisciplinary, setHasDisciplinary] = useState<boolean>(false);

  // Result States
  const [result, setResult] = useState<{
    eligible: boolean;
    scholarship: Scholarship | null;
    discount: string;
    reasons: string[];
    missingCriteria: string[];
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const reasons: string[] = [];
    const missingCriteria: string[] = [];

    if (studentType === 'freshman') {
      const parsedGrade = parseFloat(hsGrade) || 0;
      const parsedIncome = parseFloat(income) || 0;
      const incomeLimit = region === 'NCR' ? 100000 : 72000;
      const scholarship = handbookScholarships.find(s => s.id === 'amasr')!;

      // Grade qualification
      if (parsedGrade < 80) {
        missingCriteria.push('High school average grade must be at least 80% (You entered ' + parsedGrade + '%)');
      }

      // No grade below 80 in core subjects
      if (hasBelow80) {
        missingCriteria.push('No grade below 80% is allowed in Mathematics, Science, and English');
      }

      // Income limit
      if (parsedIncome > incomeLimit) {
        missingCriteria.push(`Annual family income for ${region} region must not exceed ₱${incomeLimit.toLocaleString()} (You entered ₱${parsedIncome.toLocaleString()})`);
      }

      if (missingCriteria.length === 0) {
        // Determine discount level
        let discount = '50% discount on all fees';
        if (parsedGrade >= 95) {
          discount = '100% discount on all fees';
        } else if (parsedGrade >= 90) {
          discount = '75% discount on all fees';
        }

        reasons.push(`Congratulations! Your high school average of ${parsedGrade}% and family income meet the eligibility standards for the Amable M. Aguiluz Sr. Memorial Scholarship.`);

        setResult({
          eligible: true,
          scholarship,
          discount,
          reasons,
          missingCriteria
        });
      } else {
        setResult({
          eligible: false,
          scholarship: null,
          discount: '0%',
          reasons: ['Unfortunately, you do not meet the minimum requirements for the freshman scholarship.'],
          missingCriteria
        });
      }
    } else {
      // Enrolled Student checker
      const parsedUnits = parseInt(unitsLoaded) || 0;
      const parsedGpa = parseFloat(collegeGpa) || 0;
      const scholarship = handbookScholarships.find(s => s.id === 'acaex')!;

      if (residencyYear === 'less') {
        missingCriteria.push('Requires a minimum of one (1) year residency at ACLC College');
      }

      if (parsedUnits < 18) {
        missingCriteria.push('Must carry a minimum trimester load of 18 units (You entered ' + parsedUnits + ' units)');
      }

      if (parsedGpa < 1.0 || parsedGpa > 1.75) {
        missingCriteria.push('Trimester GPA must be exceptionally outstanding between 1.00 and 1.75 (You entered ' + parsedGpa + ')');
      }

      if (hasBelow30) {
        missingCriteria.push('No grade below 3.0 or "D" (Dropped) in any course is allowed');
      }

      if (hasDisciplinary) {
        missingCriteria.push('Must have no pending academic or conduct violations/disciplinary cases');
      }

      if (missingCriteria.length === 0) {
        let discount = '50% discount on all fees';
        if (parsedGpa <= 1.25) {
          discount = '100% discount on all fees';
        } else if (parsedGpa <= 1.50) {
          discount = '75% discount on all fees';
        }

        reasons.push(`Incredible! Your term GPA of ${parsedGpa} on a full load of ${parsedUnits} units qualifies you for the Academic Excellence (ACAEX) Scholarship Award.`);

        setResult({
          eligible: true,
          scholarship,
          discount,
          reasons,
          missingCriteria
        });
      } else {
        setResult({
          eligible: false,
          scholarship: null,
          discount: '0%',
          reasons: ['Unfortunately, you do not meet the qualifications for the Academic Excellence scholarship.'],
          missingCriteria
        });
      }
    }
  };

  const handleReset = () => {
    setResult(null);
    setHsGrade('88');
    setHasBelow80(false);
    setRegion('Provincial');
    setIncome('65000');
    setResidencyYear('more');
    setUnitsLoaded('18');
    setCollegeGpa('1.35');
    setHasBelow30(false);
    setHasDisciplinary(false);
  };

  return (
    <div id="scholarship-checker" className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-700 to-navy-800 px-6 py-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <Award className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">Scholarship Eligibility Checker</h3>
            <p className="text-xs text-navy-100">Check if you qualify for tuition fee discounts and grants</p>
          </div>
        </div>
      </div>

      {/* 2015 Handbook Disclaimer Banner */}
      <div className="bg-amber-50 border-b border-amber-100 px-6 py-3 flex gap-2.5 items-start">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-800 leading-relaxed">
          <span className="font-bold">2015 Handbook Version Notice:</span> The criteria and rules evaluated in this checker are based on historical 2015 student handbook policies. For the latest updated scholarship programs, requirements, active slots, and direct applications, please consult with the school registrar or student affairs administration.
        </div>
      </div>

      <div className="p-6">
        {/* Toggle selectors */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Student Admission Category</label>
          <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl max-w-md">
            <button
              onClick={() => { setStudentType('freshman'); setResult(null); }}
              className={`py-2 text-xs font-medium rounded-lg transition-all ${studentType === 'freshman' ? 'bg-white text-navy-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Incoming Freshman
            </button>
            <button
              onClick={() => { setStudentType('enrolled'); setResult(null); }}
              className={`py-2 text-xs font-medium rounded-lg transition-all ${studentType === 'enrolled' ? 'bg-white text-navy-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Enrolled Student
            </button>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Side */}
          <form onSubmit={handleCheck} className="lg:col-span-6 space-y-5">
            {studentType === 'freshman' ? (
              /* Freshman Fields */
              <div className="space-y-4">
                <div className="bg-navy-50/50 p-4 rounded-xl border border-navy-100/50">
                  <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-navy-700" />
                    Aguiluz Sr. Memorial Grant Eligibility
                  </h4>
                  <p className="text-xs text-slate-500">Provides up to 100% discount on all fees for qualified and financially challenged high school graduates.</p>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1.5">High School Average Grade (%)</label>
                  <input
                    type="number"
                    min="75"
                    max="100"
                    step="0.1"
                    value={hsGrade}
                    onChange={(e) => setHsGrade(e.target.value)}
                    required
                    className="w-full text-sm p-2.5 border border-slate-200 rounded-lg focus:border-navy-500 focus:outline-none font-mono"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">Grades 80-89 = 50% off | 90-94 = 75% off | 95-100 = 100% off</p>
                </div>

                <div className="flex items-center gap-2 py-1">
                  <input
                    type="checkbox"
                    id="below80"
                    checked={hasBelow80}
                    onChange={(e) => setHasBelow80(e.target.checked)}
                    className="w-4 h-4 text-navy-600 border-slate-300 rounded focus:ring-navy-500"
                  />
                  <label htmlFor="below80" className="text-xs text-slate-600 font-medium select-none cursor-pointer">
                    I have grades below 80% in Math, Science, or English.
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1.5">Family Location Region</label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value as any)}
                      className="w-full text-sm p-2.5 border border-slate-200 rounded-lg bg-white focus:border-navy-500 focus:outline-none"
                    >
                      <option value="Provincial">Provincial Region</option>
                      <option value="NCR">National Capital Region (NCR)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1.5">Annual Family Income (₱)</label>
                    <input
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      required
                      className="w-full text-sm p-2.5 border border-slate-200 rounded-lg focus:border-navy-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">
                  Annual limit: Provincial ≤ ₱72,000 | NCR ≤ ₱100,000
                </p>
              </div>
            ) : (
              /* Enrolled Student Fields */
              <div className="space-y-4">
                <div className="bg-amber-50/40 p-4 rounded-xl border border-amber-100">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    ACAEX Scholar Award Eligibility
                  </h4>
                  <p className="text-xs text-slate-500">Provides up to 100% discount on all fees for active, outstanding college students with no delinquency records.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1.5">ACLC College Residency</label>
                    <select
                      value={residencyYear}
                      onChange={(e) => setResidencyYear(e.target.value as any)}
                      className="w-full text-sm p-2.5 border border-slate-200 rounded-lg bg-white focus:border-navy-500 focus:outline-none"
                    >
                      <option value="more">1 Year or More</option>
                      <option value="less">Less than 1 Year</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1.5">Units Enrolled Last Trimester</label>
                    <input
                      type="number"
                      value={unitsLoaded}
                      onChange={(e) => setUnitsLoaded(e.target.value)}
                      required
                      className="w-full text-sm p-2.5 border border-slate-200 rounded-lg focus:border-navy-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1.5">Latest Trimester GPA (1.00 - 5.00)</label>
                  <input
                    type="number"
                    min="1.0"
                    max="5.0"
                    step="0.01"
                    value={collegeGpa}
                    onChange={(e) => setCollegeGpa(e.target.value)}
                    required
                    className="w-full text-sm p-2.5 border border-slate-200 rounded-lg focus:border-navy-500 focus:outline-none font-mono"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">GPA 1.00-1.25 = 100% off | 1.26-1.50 = 75% off | 1.51-1.75 = 50% off</p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="below3"
                      checked={hasBelow30}
                      onChange={(e) => setHasBelow30(e.target.checked)}
                      className="w-4 h-4 text-navy-600 border-slate-300 rounded focus:ring-navy-500"
                    />
                    <label htmlFor="below3" className="text-xs text-slate-600 font-medium select-none cursor-pointer">
                      I have grades below 3.0 or Incomplete / Dropped marks.
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="disciplinary"
                      checked={hasDisciplinary}
                      onChange={(e) => setHasDisciplinary(e.target.checked)}
                      className="w-4 h-4 text-navy-600 border-slate-300 rounded focus:ring-navy-500"
                    />
                    <label htmlFor="disciplinary" className="text-xs text-slate-600 font-medium select-none cursor-pointer">
                      I have record of academic or conduct offenses.
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="flex-1 bg-navy-700 hover:bg-navy-800 text-white font-medium text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg text-center font-display"
              >
                Evaluate Eligibility
              </button>
              {result && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all text-xs font-semibold uppercase tracking-wider font-display"
                >
                  Clear
                </button>
              )}
            </div>
          </form>

          {/* Results Side */}
          <div className="lg:col-span-6 bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
            {result ? (
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  {result.eligible ? (
                    <CheckCircle className="w-8 h-8 text-emerald-500 shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                  )}
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-base">
                      {result.eligible ? 'Eligible for Scholarship' : 'Not Eligible'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {result.eligible ? 'Your credentials satisfy the handbook guidelines.' : 'Requirements were not fully met.'}
                    </p>
                  </div>
                </div>

                {/* Badge Card */}
                {result.eligible && result.scholarship && (
                  <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-8 -mt-8"></div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Approved Scholarship Category</p>
                    <p className="text-sm font-bold text-navy-800 mt-1">{result.scholarship.name}</p>
                    
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Estimated Tuition Discount</p>
                        <p className="text-lg font-display font-extrabold text-emerald-600 mt-0.5">{result.discount}</p>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded border border-emerald-100">
                        OFFICIAL GRANT
                      </span>
                    </div>
                  </div>
                )}

                {/* Details / Critiques */}
                <div className="space-y-3">
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Detailed Assessment Notes</h5>
                    <div className="space-y-2">
                      {result.reasons.map((r, i) => (
                        <p key={i} className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-100">
                          {r}
                        </p>
                      ))}
                    </div>
                  </div>

                  {result.missingCriteria.length > 0 && (
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-red-500 mb-2">Unmet Requirements ({result.missingCriteria.length})</h5>
                      <ul className="space-y-1.5">
                        {result.missingCriteria.map((m, i) => (
                          <li key={i} className="text-xs text-red-700 bg-red-50 p-2.5 rounded-lg border border-red-100/50 flex gap-2 items-start">
                            <span className="text-sm">❌</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Next Steps / Checklist */}
                {result.eligible && result.scholarship && (
                  <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <h5 className="text-[10px] font-bold uppercase tracking-wider text-navy-700 mb-2 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      Required Submission Checklist
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {result.scholarship.requirements.map((req, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-[10px] text-slate-400 border-t border-slate-100 pt-2 bg-slate-50 -mx-4 -mb-4 px-4 py-2 text-center rounded-b-xl">
                      Submit requirements to the School Director at least 2 weeks before enrollment.
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Idle state placeholder */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <HelpCircle className="w-12 h-12 text-slate-300 mb-3" />
                <h5 className="font-display font-semibold text-slate-700 text-sm">Eligibility Awaiting Assessment</h5>
                <p className="text-xs text-slate-400 max-w-xs mt-1">
                  Fill in your academic and family financial credentials on the left, then click <strong>Evaluate Eligibility</strong> to see custom grant percentages.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
