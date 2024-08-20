import React from 'react'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import { UserRound } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/shared/components/common/container'
import { SearchInput } from '@/shared/components/common/search-input'
import { Button } from '@/shared/components/ui'
import { CartButton } from '@/shared/components/common/cart-button'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<Link href='/'>
					<div className='flex items-center gap-4'>
						<Image
							src='/assets/images/logo.png'
							alt='Logo'
							width={35}
							height={35}
						/>
						<div>
							<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
							<p className='text-sm text-gray-400 leading-3'>
								Extremely delicious
							</p>
						</div>
					</div>
				</Link>

				<div className='mx-10 flex-1'>
					<SearchInput />
				</div>

				<div className='flex items-center gap-3'>
					<Button variant='outline' className='flex items-center gap-1'>
						<UserRound size={16} />
						Sing in
					</Button>

					<CartButton />
				</div>
			</Container>
		</header>
	)
}
