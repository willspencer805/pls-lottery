const faqs = [
  {
    question: 'What can I win?',
    answer:
      'Just like a traditional lottery, win real value through the decentralized version!. Prizes are still TBD until I get approval for something but it will have real world value! If no approvals are given, rest assured I will give you some ETH out of my own wallet',
  },
  {
    question: 'How do I enter?',
    answer:
      "Over the coming weeks we'll learn how to exchange PLS tokens for entry NFT(s).  Your NFTs will act as you 'ticket' to the lottery. The more you purchase the better your chances are! Be careful though, someone may (or will) try to steal them from you!",
  },
]

export default function Faqs() {
  return (
    <div className="bg-white" id="faq">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How can I get test Ether?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Go to the{' '}
                  <a
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noreferrer"
                    href="https://goerlifaucet.com/"
                  >
                    Goerli Faucet
                  </a>{' '}
                  to get some test Ether to get started. If you don't remember
                  how to use the faucet, check out the video explaining them{' '}
                  <a>here!</a>
                </dd>
              </div>
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
  )
}
