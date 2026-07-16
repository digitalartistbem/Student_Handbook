import React, { useState, useMemo } from 'react';
import { Search, Hammer, ShieldAlert, CheckCircle, Scale, AlertTriangle, Eye, X } from 'lucide-react';
import { handbookOffenses, Offense } from '../handbookData';

export default function OffenseDirectory() {
  const [search, setSearch] = useState<string>('');
  const [gravityFilter, setGravityFilter] = useState<'All' | 'Minor' | 'Major' | 'Extreme'>('All');
  const [selectedOffense, setSelectedOffense] = useState<Offense | null>(null);

  // Filtered offenses list
  const filteredOffenses = useMemo(() => {
    return handbookOffenses.filter(offense => {
      const matchesSearch = offense.description.toLowerCase().includes(search.toLowerCase()) ||
                            offense.number.toString() === search;
      const matchesGravity = gravityFilter === 'All' || offense.gravity === gravityFilter;
      return matchesSearch && matchesGravity;
    });
  }, [search, gravityFilter]);

  const getGravityBadgeColor = (gravity: 'Minor' | 'Major' | 'Extreme') => {
    switch (gravity) {
      case 'Minor':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Major':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Extreme':
        return 'bg-rose-50 text-rose-700 border-rose-200';
    }
  };

  return (
    <div id="offense-directory" className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-700 to-navy-800 px-6 py-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <Hammer className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">Student Disciplinary Code Directory</h3>
            <p className="text-xs text-navy-100">Browse official ACLC student offenses, gravity levels, and violation penalties</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Controls Layout */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search box */}
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search offenses (e.g. ID, attendance, cheating, theft, uniform)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-xs md:text-sm pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:border-navy-500 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Gravity Filters */}
          <div className="flex gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0 overflow-x-auto">
            {(['All', 'Minor', 'Major', 'Extreme'] as const).map((g) => (
              <button
                key={g}
                onClick={() => setGravityFilter(g)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${gravityFilter === g ? 'bg-white text-navy-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {g === 'All' ? 'All Gravities' : `${g} Gravity`}
              </button>
            ))}
          </div>
        </div>

        {/* Offenses Grid list */}
        {filteredOffenses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredOffenses.map((offense) => (
              <div
                key={offense.number}
                onClick={() => setSelectedOffense(offense)}
                className="bg-white border border-slate-200 hover:border-navy-400 hover:shadow-md hover:-translate-y-0.5 rounded-xl p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-xs font-bold text-navy-600 bg-navy-50 px-2 py-0.5 rounded-md">
                      Offense #{offense.number}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getGravityBadgeColor(offense.gravity)}`}>
                      {offense.gravity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {offense.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-50 pt-3 text-[10px] text-navy-600 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    Review Penalties
                  </span>
                  <span className="text-slate-400 font-normal">
                    Click card for details
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
            <ShieldAlert className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="font-display font-semibold text-slate-700 text-sm">No Matches Found</h4>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Your query didn't return any handbook violations. Try searching generic keywords like "ID", "uniform", or "bribery".
            </p>
          </div>
        )}

        {/* Footnotes due process banner */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-6 flex gap-3 items-start">
          <Scale className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-navy-800">Handbook Due Process Right:</span> No erring student may be penalized without standard disciplinary due process. Students have the right to written notification, the assistance of a counsel of choice, and a formal fact-finding hearing before an investigation committee.
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedOffense && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 w-full max-w-xl max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-navy-700 to-navy-800 p-5 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold bg-white/20 px-2 py-0.5 rounded">
                  Offense #{selectedOffense.number}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border bg-white text-slate-800`}>
                  {selectedOffense.gravity} Gravity
                </span>
              </div>
              <button
                onClick={() => setSelectedOffense(null)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Official Handbook Description</h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {selectedOffense.description}
                </p>
              </div>

              {/* Standard violation penalty timelines */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Schedule of Penalties</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-bold flex items-center justify-center shrink-0">1st</span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-700">First Commission Penalty</h5>
                      <p className="text-xs text-slate-500 mt-0.5">{selectedOffense.firstViolation}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold flex items-center justify-center shrink-0">2nd</span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-700">Second Commission Penalty</h5>
                      <p className="text-xs text-slate-500 mt-0.5">{selectedOffense.secondViolation}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold flex items-center justify-center shrink-0">3rd</span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-700">Third Commission Penalty</h5>
                      <p className="text-xs text-slate-500 mt-0.5">{selectedOffense.thirdViolation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Warnings based on severity */}
              {selectedOffense.gravity === 'Extreme' && (
                <div className="bg-red-50 text-red-800 p-3.5 rounded-xl text-xs border border-red-100 flex gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <div>
                    <span className="font-semibold">Severe Violation Flag:</span> Extreme gravity offenses typically trigger immediate suspension, exclusion, or CHED-approved permanent expulsion even on first-time commission.
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-b-2xl flex justify-end shrink-0">
              <button
                onClick={() => setSelectedOffense(null)}
                className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
