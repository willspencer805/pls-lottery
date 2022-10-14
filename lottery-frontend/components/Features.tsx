import {
  HeartIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline'

const features = [
  // {
  //   name: 'Learning',
  //   description: 'Get an opportunity to learn dApp infrastruc',
  //   icon: AcademicCapIcon,
  // },
  {
    name: 'Learning',
    description: `Don't just watch others have all the fun making transactions. Get hands-on experience with no money at stake.`,
    icon: AcademicCapIcon,
  },
  {
    name: 'Real-World Rewards 🤑',
    description:
      'Win prizes for participating! By entering the lottery you not only get the chance to learn in a risk-free environment, but win some money in the process!',
    icon: ShoppingCartIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white mt-16 sm:mt-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
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
