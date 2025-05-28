'use client';

import FadeIn from './ui/FadeIn';

/**
 * Tokenomics Component
 * Displays token information and utility features
 * 
 * @component
 */
const Tokenomics = () => {
  const utilities = [
    {
      title: "Premium AI Access",
      description: "Free for basic use; pay $PRIV only for advanced AI functions.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Advanced Privacy",
      description: "Unlock TEE-protected and encrypted operations with $PRIV.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Staking Rewards",
      description: "Stake $PRIV to earn and support network security.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "DAO Governance",
      description: "Use $PRIV to vote on upgrades and proposals.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Contributor Incentives",
      description: "Earn $PRIV by developing AI Agents or providing valuable data.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
  ];

  const tokenAllocation = [
    {
      name: "Fair Launch",
      percentage: 60,
      color: "bg-sky-500"
    },
    {
      name: "AI Incentive Pool",
      percentage: 15,
      color: "bg-emerald-500"
    },
    {
      name: "Ecosystem Incentives & Community Growth",
      percentage: 5,
      color: "bg-violet-500"
    },
    {
      name: "Staking Rewards",
      percentage: 10,
      color: "bg-amber-500"
    },
    {
      name: "DAO Treasury",
      percentage: 5,
      color: "bg-rose-500"
    },
    {
      name: "Team & Advisors",
      percentage: 5,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="tokenomics" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                Tokenomics
              </h2>
            </div>
          </FadeIn>

          {/* Token info */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FadeIn delay={200}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-sky-500/20 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">Token Name</h3>
                    <p className="text-4xl text-sky-400 font-mono tracking-tight">$PRIV</p>
                  </div>
                </FadeIn>
                <FadeIn delay={400}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-sky-500/20 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">Total Supply</h3>
                    <p className="text-4xl text-sky-400 font-mono tracking-tight">1,000,000,000</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Token Allocation */}
          <FadeIn delay={600}>
            <div className="max-w-4xl mx-auto mb-20">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">Token Allocation</h3>
              
              {/* Allocation Chart */}
              <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden mb-8">
                {tokenAllocation.map((item, index) => {
                  const left = tokenAllocation
                    .slice(0, index)
                    .reduce((acc, curr) => acc + curr.percentage, 0);
                  return (
                    <div
                      key={item.name}
                      className={`absolute h-full ${item.color} transition-all duration-500`}
                      style={{
                        left: `${left}%`,
                        width: `${item.percentage}%`
                      }}
                    />
                  );
                })}
              </div>

              {/* Allocation Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tokenAllocation.map((item) => (
                  <div
                    key={item.name}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-sky-500/20 transition-all duration-300 flex items-center"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center justify-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                        <h4 className="text-white font-medium">{item.name}</h4>
                      </div>
                      <p className="text-2xl font-mono text-sky-400">{item.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Utility table */}
          <FadeIn delay={800}>
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-gray-700/50">
                {/* Table */}
                <div className="relative">
                  <div className="hidden md:block">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700/50">
                          <th className="py-6 px-8 text-left text-sm font-semibold text-gray-400">Utility</th>
                          <th className="py-6 px-8 text-left text-sm font-semibold text-gray-400">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {utilities.map((utility, index) => (
                          <tr 
                            key={index}
                            className="group border-b border-gray-700/50 last:border-0 hover:bg-gray-800/50 transition-colors duration-300"
                          >
                            <td className="py-6 px-8">
                              <div className="flex items-center gap-4">
                                <div className="text-sky-400 text-2xl group-hover:text-sky-300 transition-colors">
                                  {utility.icon}
                                </div>
                                <span className="text-white font-medium text-lg">{utility.title}</span>
                              </div>
                            </td>
                            <td className="py-6 px-8 text-gray-400 text-lg">
                              {utility.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile view */}
                  <div className="md:hidden">
                    {utilities.map((utility, index) => (
                      <div 
                        key={index}
                        className="group border-b border-gray-700/50 last:border-0 hover:bg-gray-800/50 transition-colors duration-300 p-6"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-sky-400 text-2xl group-hover:text-sky-300 transition-colors">
                            {utility.icon}
                          </div>
                          <span className="text-white font-medium text-lg">{utility.title}</span>
                        </div>
                        <p className="text-gray-400 text-base pl-12">
                          {utility.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 