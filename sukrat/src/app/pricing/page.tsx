const PricingPage = () => {
    const plans = [
      {
        name: "Basic",
        price: "$9",
        features: [
          "Basic features",
          "2 team members",
          "20GB storage",
          "Basic support",
        ],
        recommended: false
      },
      {
        name: "Pro",
        price: "$29",
        features: [
          "All Basic features",
          "10 team members",
          "100GB storage",
          "Priority support",
          "Advanced analytics"
        ],
        recommended: true
      },
      {
        name: "Enterprise",
        price: "$99",
        features: [
          "All Pro features",
          "Unlimited team members",
          "500GB storage",
          "24/7 support",
          "Custom solutions"
        ],
        recommended: false
      }
    ];
  
    return (
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`rounded-lg p-8 ${
                  plan.recommended 
                    ? 'bg-blue-50 border-2 border-blue-500 relative' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Recommended
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-gray-500 text-lg">/month</span></p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-md font-semibold ${
                    plan.recommended 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingPage;