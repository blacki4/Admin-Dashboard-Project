"use client";

import { useState } from "react";
import {
  Check,
  Star,
  Crown,
  Zap,
  Shield,
  Users,
  Cloud,
  CreditCard,
} from "lucide-react";
import { Button, Snackbar, Alert } from "@mui/material";

export default function GetPro() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const plans = {
    basic: {
      name: "Basic",
      price: { monthly: 9, yearly: 90 },
      description: "Perfect for individuals getting started",
      icon: <Star className="text-white" size={24} />,
      color: "from-blue-500 to-blue-600",
      features: [
        "Up to 5 team members",
        "10GB cloud storage",
        "Basic analytics dashboard",
        "Email support",
        "Standard security",
        "5 projects limit",
      ],
      limitations: ["No advanced features", "Limited integrations"],
    },
    pro: {
      name: "Professional",
      price: { monthly: 29, yearly: 290 },
      description: "Ideal for growing teams and businesses",
      icon: <Crown className="text-white" size={24} />,
      color: "from-purple-500 to-purple-600",
      features: [
        "Up to 20 team members",
        "100GB cloud storage",
        "Advanced analytics dashboard",
        "Priority email & chat support",
        "Advanced security features",
        "Unlimited projects",
        "Custom integrations",
        "API access",
        "Advanced reporting",
      ],
      popular: true,
    },
    enterprise: {
      name: "Enterprise",
      price: { monthly: 99, yearly: 990 },
      description: "For large organizations with custom needs",
      icon: <Zap className="text-white" size={24} />,
      color: "from-orange-500 to-orange-600",
      features: [
        "Unlimited team members",
        "1TB+ cloud storage",
        "Custom analytics solutions",
        "24/7 phone & dedicated support",
        "Enterprise-grade security",
        "Unlimited everything",
        "Custom integrations",
        "Full API access",
        "Advanced reporting",
        "SLA guarantee",
        "Custom onboarding",
        "Dedicated account manager",
      ],
    },
  };

  const handleSubscribe = (plan) => {
    // Simulate subscription process
    setSnackbar({
      open: true,
      message: `🎉 Awesome! Redirecting to ${plan.name} plan checkout...`,
      severity: "success",
    });

    // In real app, redirect to payment gateway
    setTimeout(() => {
      // Simulate payment process
      alert(`Processing ${plan.name} subscription...`);
    }, 2000);
  };

  const calculateSavings = (plan) => {
    const monthlyCost = plan.price.monthly * 12;
    const yearlyCost = plan.price.yearly;
    return monthlyCost - yearlyCost;
  };

  const currentPlan = plans[selectedPlan];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 flex">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Crown className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Upgrade to <span className="gradient-text">DaM Board Pro</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Unlock the full potential of your dashboard with advanced features,
            enhanced security, and priority support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-2xl p-2 shadow-lg border border-gray-200 mb-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingCycle === "yearly"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
          <p className="text-sm text-gray-500">
            {billingCycle === "yearly" ? "Billed annually" : "Billed monthly"}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                selectedPlan === key
                  ? "ring-4 ring-indigo-500 ring-opacity-50 scale-105"
                  : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      $
                      {billingCycle === "monthly"
                        ? plan.price.monthly
                        : plan.price.yearly}
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>

                  {billingCycle === "yearly" && (
                    <div className="text-green-600 font-semibold text-sm">
                      Save ${calculateSavings(plan)} per year!
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="flex-1 mb-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="text-green-600" size={14} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations for Basic Plan */}
                  {plan.limitations && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">
                        LIMITATIONS
                      </h4>
                      <div className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 bg-gray-400 rounded-full" />
                            </div>
                            <span className="text-sm">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  fullWidth
                  variant={selectedPlan === key ? "contained" : "outlined"}
                  onClick={() => handleSubscribe(plan)}
                  className={`py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    selectedPlan === key
                      ? `bg-gradient-to-r ${plan.color} hover:shadow-lg transform hover:scale-105`
                      : "border-2 border-gray-300 hover:border-indigo-500 hover:bg-indigo-50"
                  }`}
                  startIcon={<CreditCard size={20} />}
                >
                  {selectedPlan === key ? "Get Started" : "Select Plan"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Compare Plans Feature by Feature
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-lg font-semibold text-gray-900">
                    Features
                  </th>
                  {Object.entries(plans).map(([key, plan]) => (
                    <th key={key} className="text-center py-4 px-6">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg`}
                        >
                          {plan.icon}
                        </div>
                        <span className="font-bold text-gray-900">
                          {plan.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Team Members",
                    basic: "Up to 5",
                    pro: "Up to 20",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Storage",
                    basic: "10GB",
                    pro: "100GB",
                    enterprise: "1TB+",
                  },
                  {
                    feature: "Projects",
                    basic: "5",
                    pro: "Unlimited",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Support",
                    basic: "Email",
                    pro: "Priority",
                    enterprise: "24/7",
                  },
                  {
                    feature: "Security",
                    basic: "Standard",
                    pro: "Advanced",
                    enterprise: "Enterprise",
                  },
                  {
                    feature: "API Access",
                    basic: "No",
                    pro: "Yes",
                    enterprise: "Full",
                  },
                  {
                    feature: "Custom Integrations",
                    basic: "No",
                    pro: "Yes",
                    enterprise: "Yes",
                  },
                  {
                    feature: "SLA Guarantee",
                    basic: "No",
                    pro: "No",
                    enterprise: "Yes",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6 font-medium text-gray-700">
                      {row.feature}
                    </td>
                    <td className="text-center py-4 px-6">
                      <div className="flex justify-center">
                        {row.basic === "Yes" ? (
                          <Check className="text-green-500" size={20} />
                        ) : row.basic === "No" ? (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                        ) : (
                          <span className="text-gray-600">{row.basic}</span>
                        )}
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      <div className="flex justify-center">
                        {row.pro === "Yes" ? (
                          <Check className="text-green-500" size={20} />
                        ) : row.pro === "No" ? (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                        ) : (
                          <span className="text-gray-600">{row.pro}</span>
                        )}
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      <div className="flex justify-center">
                        {row.enterprise === "Yes" ? (
                          <Check className="text-green-500" size={20} />
                        ) : row.enterprise === "No" ? (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                        ) : (
                          <span className="text-gray-600">
                            {row.enterprise}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied teams who upgraded to DaM Board Pro
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                { icon: <Shield size={32} />, text: "Enterprise Security" },
                { icon: <Users size={32} />, text: "24/7 Support" },
                { icon: <Cloud size={32} />, text: "99.9% Uptime" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/20 rounded-2xl px-6 py-4"
                >
                  {item.icon}
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
            <Button
              variant="contained"
              size="large"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
              startIcon={<Crown size={24} />}
              onClick={() => handleSubscribe(currentPlan)}
            >
              Start Your Pro Journey Today
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change plans later?",
                answer:
                  "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "We offer a 14-day free trial for all paid plans. No credit card required to start.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Absolutely! You can cancel your subscription at any time with no cancellation fees.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            borderRadius: "16px",
            fontWeight: "600",
            fontSize: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            alignItems: "center",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
