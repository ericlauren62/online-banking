import PersonalCard from "./PersonalCard";

export default function PersonalFirstSection() {
  const checkingItem = ["Checkings", "Intrest Checking", "Savings", "Money Market", "CDs & IRAs"];
  const lendingItem = ["Auto Loans", "Home Loans", "Personal Loans"];

  return (
    <div className="container grid grid-cols-2 py-32">
      <PersonalCard
        title="Checking & Savings"
        description="Checking and savings accounts that are quick, simple, and intuitive."
        items={checkingItem}
        url="#"
      />
      <PersonalCard
        title="Lending"
        description="From purchasing a new car to upgrading your home, you can get by with
                    a little help from your friends."
        items={lendingItem}
        url="#"
      />
    </div>
  );
}
