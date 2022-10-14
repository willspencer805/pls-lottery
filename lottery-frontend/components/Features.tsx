import {
  HeartIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Learning',
    description: 'Get an opportunity to learn the ins and outs',
    icon: HeartIcon,
  },
  {
    name: 'Interactive',
    description: `Don't just watch others have all the fun making transactions. Get hands-on experience with no money at stake`,
    icon: TrendingUpIcon,
  },
  {
    name: 'Real-World Rewards 🤑',
    description:
      'Coming Soon: Exchange $AJC for exclusive digital and physical goods that can only be purchased with $AJC.',
    icon: ShoppingCartIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white mt-16 sm:mt-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
