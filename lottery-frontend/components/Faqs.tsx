const faqs = [
  {
    question: 'What can I win?',
    answer:
      'Just like a traditional lottery, win real value through the decentralized version! Prizes are still TBD until I get approval for something but it will have real world value! If no approvals are given, rest assured I will find a prize for you 😄',
  },
  {
    question: 'How do I enter?',
    answer:
      'Over the coming weeks we\'ll learn how to exchange PLS tokens for entry NFT(s).  Your NFTs will act as your "ticket" to the lottery. The more you purchase the better your chances are! Be careful though, someone may try to steal them from you!',
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
                    className="font-medium text-teal-600 hover:text-teal-500"
                    target="_blank"
                    rel="noreferrer"
                    href="https://goerlifaucet.com/"
                  >
                    Goerli Faucet
                  </a>{' '}
                  to get some test Ether to get started. If you don&apos;t
                  remember how to use the faucet, check out the video explaining
                  them{' '}
                  <a
                    className="font-medium text-teal-600 hover:text-teal-500"
                    href="https://eyus.sharepoint.com/:v:/r/sites/BlockchainGuild2/Shared%20Documents/Blockchain%20Guild%20Sessions/Practical%20Learning%20Series/11%20-%20Testnets.mp4?csf=1&web=1&e=ldxlD7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here!
                  </a>
                </dd>
                <br></br>
                <br></br>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How can I request a future topic?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Future session topics are always appreciated, they help me and
                  the rest of the group get the most out of these sessions. You
                  can find the form for session requests{' '}
                  <a
                    className="font-medium text-teal-600 hover:text-teal-500"
                    target="_blank"
                    rel="noreferrer"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=mT-XW99360uyfaoMcLhILD8uZzSsmURBt9ySsof8ZzJUQ05NV0ExNDhTWkpFRzBTVjYwRlVKWEhETy4u"
                  >
                    here.
                  </a>
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
