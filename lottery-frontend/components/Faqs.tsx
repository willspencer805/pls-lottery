const faqs = [
  {
    question: "How can I get test Ether?",
    answer: "",
  },
  {
    question: "What can I win?",
    answer: "",
  },
  {
    question: "How do I enter?",
    answer: "",
  },
  {
    question: "How do I add PLSC to my wallet?",
    answer: "",
  },
];

export default function Faqs() {
  return (
    <div className="bg-white" id="faq">
      <div className="flex justify-center max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="flex justify-center lg:grid lg:grid-cols-4 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
