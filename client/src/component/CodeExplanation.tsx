

const CodeExplanation = ({explanation} : {explanation: string}) => {
  return (
    <main className="w-full max-w-4xl mt-6 bg-gray-50 rounded-2xl shadow-lg">
      <h2>Explanation : </h2>
      <p>{explanation}</p>
    </main>
  )
}
export default CodeExplanation