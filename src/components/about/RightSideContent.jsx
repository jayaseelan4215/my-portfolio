import React, { memo } from "react";
import { useSelector } from "react-redux";

function RightSideContent() {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const approachCards = [
    {
      icon: "⚙️",
      title: "System-Oriented Backend Design",
      description:
        "Designing scalable, secure, and maintainable backend systems with clean architecture and optimized workflows.",
    },
    {
      icon: "🌐",
      title: "All-in-One Social Media Platform",
      description:
        "Built centralized platforms for posting, messaging, campaigns, and analytics across multiple social media channels.",
    },
    {
      icon: "🤖",
      title: "AI-Driven Insights",
      description:
        "Leveraging AI to generate engagement insights, performance summaries, and campaign analytics for better decisions.",
    },
    {
      icon: "🚀",
      title: "Continuous Improvement",
      description:
        "Constantly improving performance, code quality, system reliability, and development workflows.",
    },
  ];

  const Highlight = ({ children }) => (
    <span style={{ color: themeColors.primaryColor, fontWeight: 600 }}>
      {children}
    </span>
  );

  return (
    <div className="lg:w-1/2">
      <div className="sticky top-24">
        {/* ================= Philosophy ================= */}
        <div className="mb-10">
          <h3
            className="text-3xl font-semibold mb-6"
            style={{ color: themeColors.primaryColor }}
          >
            My Development Philosophy
          </h3>

          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: `${themeColors.primaryColor}08`,
              border: `1px solid ${themeColors.border}`,
            }}
          >
            <ul
              className="text-lg leading-relaxed space-y-4"
              style={{ color: themeColors.summeryText }}
            >
              <li>
                <Highlight>All-in-One Social Media Systems</Highlight>: Designing
                centralized platforms that handle social media posting,
                messaging, campaign management, scheduling, and analytics from a
                single dashboard.
              </li>

              <li>
                <Highlight>AI-Powered Insights & Analytics</Highlight>: Implementing
                AI-assisted insights for engagement tracking, content
                performance, audience behavior, and campaign optimization.
              </li>

              <li>
                <Highlight>Laravel & Backend Architecture</Highlight>: Building
                secure, scalable backend systems using Laravel and
                CodeIgniter with clean MVC architecture and RESTful APIs.
              </li>

              <li>
                <Highlight>REST APIs & Third-Party Integrations</Highlight>:
                Developing and integrating APIs for social media platforms,
                payment gateways, and external services.
              </li>

              <li>
                <Highlight>Payment & Subscription Systems</Highlight>: Experience
                with payment gateways, subscription flows, webhook handling,
                transaction validation, and reconciliation.
              </li>

              <li>
                <Highlight>Performance & Scalability</Highlight>: Optimizing API
                response times, database queries, caching strategies, and
                background jobs for high-traffic applications.
              </li>

              <li>
                <Highlight>Frontend Collaboration</Highlight>: Working closely
                with React teams to ensure smooth API contracts, clean data
                flows, and consistent user experience.
              </li>
            </ul>
          </div>
        </div>

        {/* ================= Approach Cards ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-lg flex flex-col"
              style={{
                backgroundColor: themeColors.bg,
                border: `1px solid ${themeColors.border}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                }}
              >
                {card.icon}
              </div>

              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: themeColors.primaryColor }}
              >
                {card.title}
              </h4>

              <p
                className="text-sm leading-relaxed"
                style={{ color: themeColors.summeryText }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= Current Focus ================= */}
        <div className="mt-8">
          <h4
            className="text-lg font-semibold mb-4"
            style={{ color: themeColors.primaryColor }}
          >
            Current Focus
          </h4>

          <div className="flex flex-wrap gap-2">
            {[
              "Social Media Platform Architecture",
              "Post Scheduling & Messaging Systems",
              "Campaign Management",
              "AI Insights & Analytics",
              "Multi-Channel API Integrations",
              "Payment & Subscription Systems",
              "Backend Performance Optimization",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                  border: `1px solid ${themeColors.primaryColor}30`,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RightSideContent);
