import CheckBox from "../atoms/CheckBox";

function CheckBoxContainer({ checkedItems, setCheckedItems }: any) {
  const values = [
    "Abundance",
    "Acceptance",
    "Accountability",
    "Achievement",
    "Adventure",
    "Advocacy",
    "Ambition",
    "Appreciation",
    "Attractiveness",
    "Autonomy",
    "Balance",
    "Being the Best",
    "Benevolence",
    "Boldness",
    "Brilliance",
    "Calmness",
    "Caring",
    "Challenge",
    "Charity",
    "Cheerfulness",
    "Cleverness",
    "Collaboration",
    "Commitment",
    "Community",
    "Compassion",
    "Consistency",
    "Contribution",
    "Cooperation",
    "Creativity",
    "Credibility",
    "Curiosity",
    "Daring",
    "Decisiveness",
    "Dedication",
    "Dependability",
    "Diversity",
    "Empathy",
    "Encouragement",
    "Enthusiasm",
    "Ethics",
    "Excellence",
    "Expressiveness",
    "Fairness",
    "Family",
    "Flexibility",
    "Freedom",
    "Friendships",
    "Fun",
    "Generosity",
    "Grace",
    "Growth",
    "Happiness",
    "Health",
    "Honesty",
    "Humility",
    "Humor",
    "Inclusiveness",
    "Independence",
    "Individuality",
    "Innovation",
    "Inspiration",
    "Intelligence",
    "Intuition",
    "Joy",
    "Kindness",
    "Knowledge",
    "Leadership",
    "Learning",
    "Love",
    "Loyalty",
    "Making a Difference",
    "Meaningful Work",
    "Mindfulness",
    "Motivation",
    "Open-Mindedness",
    "Optimism",
    "Originality",
    "Passion",
    "Peace",
    "Perfection",
    "Performance",
    "Personal Development",
    "Playfulness",
    "Popularity",
    "Power",
    "Preparedness",
    "Proactive",
    "Proactivity",
    "Professionalism",
    "Punctuality",
    "Quality",
    "Recognition",
    "Relationships",
    "Reliability",
    "Resilience",
    "Resourcefulness",
    "Responsibility",
    "Responsiveness",
    "Risk Taking",
    "Safety",
    "Security",
    "Self-Control",
    "Selflessness",
    "Service",
    "Simplicity",
    "Spirituality",
    "Stability",
    "Success",
    "Teamwork",
    "Thankfulness",
    "Thoughtfulness",
    "Traditionalism",
    "Trustworthiness",
    "Understanding",
    "Uniqueness",
    "Usefulness",
    "Versatility",
    "Vision",
    "Warmth",
    "Wealth",
    "Well-Being",
    "Wisdom",
    "Zeal",
  ];

  const handleToggle = (value: string) => {
    setCheckedItems((prevItems: any) => {
      if (prevItems.includes(value)) {
        return prevItems.filter((item: any) => item !== value);
      } else {
        return [...prevItems, value + " "];
      }
    });
  };
  return (
    <div className="flex-grow overflow-y-auto border mt-12 px-4 py-6 rounded-l-xl">
      <div className="flex flex-row justify-center sm:justify-center flex-wrap gap-x-6 gap-y-2 sm:gap-x-12 sm:gap-y-6">
        {values.map((value, index) => (
          <CheckBox
            key={index}
            title={value}
            isChecked={checkedItems.includes(value + " ")}
            onToggle={() => handleToggle(value)}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckBoxContainer;
