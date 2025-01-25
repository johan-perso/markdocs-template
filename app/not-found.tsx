import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '404 Not Found',
}

export default function NotFound() {
  return (
	<div className='h-[95vh] grid justify-center place-items-center'>
		<div className="sm:flex sm:space-x-12 place-items-center max-sm:p-6">
			<div className='max-sm:w-full'>
				<h1 className="text-4xl sm:text-3xl font-semibold">404</h1>
			</div>
			<div className='max-sm:mt-4'>
				<h2>Page introuvable !</h2>
				<p className="mt-1 max-sm:mt-2 sm:max-w-sm">
					Il semblerait que vous vous êtes égarés,&nbsp;
					<Link className='underline hover:text-blue-400 duration-200' href="/">revenez donc à l&apos;accueil</Link>, vous vous y sentirez mieux.
				</p>
			</div>
		</div>
    </div>
  )
}