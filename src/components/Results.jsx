import { calculateInvestmentResults } from "../util/investment"

export default function Results({ userInput }) {
  calculateInvestmentResults(userInput);

  return (
    <p>Results..</p>
  )
}