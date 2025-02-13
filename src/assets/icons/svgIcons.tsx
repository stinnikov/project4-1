import * as React from "react"
import Svg, { SvgProps, Path, Circle, Rect, Defs, G, ClipPath, Mask, NumberProp } from "react-native-svg"
const ProfileIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		fill="none"
		viewBox="0 0 30 30"
		{...props}
	>
		<Path
			fill={"none"}
			stroke={props.fill !== 'none' ? props.fill : 'black'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M7.431 24.008a8.25 8.25 0 0 1 7.355-4.508 8.25 8.25 0 0 1 7.322 4.446m-4.572-10.994a2.881 2.881 0 1 1-5.762 0 2.881 2.881 0 0 1 5.762 0Zm-2.75 13.62C8.276 26.571 3 21.294 3 14.785 3 8.276 8.277 3 14.786 3 21.295 3 26.57 8.277 26.57 14.786c0 6.509-5.276 11.785-11.785 11.785Z"
		/>
	</Svg>
)

const CatalogIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		fill="none"
		{...props}
	>
		<Path
			stroke={props.stroke ?? '#000'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4 7a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Zm0 13a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3ZM17 7a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3V7Zm0 13a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-3Z"
		/>
	</Svg>
)

const ShopIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			fill="#DABFFF"
			d="m7.261 8 .967-6H3.2L1.099 7.143A1.697 1.697 0 0 0 1 7.714C1 8.976 2.406 10 4.142 10c1.601 0 2.925-.873 3.12-2ZM22.902 7.143 20.8 2h-5.027l.965 5.99c.189 1.132 1.512 2.01 3.12 2.01C21.594 10 23 8.976 23 7.714c0-.199-.034-.388-.098-.571Z"
		/>
		<Path
			fill="#7F00FF"
			d="M12 10c1.736 0 3.142-1.024 3.142-2.286 0-.047-.003-.093-.006-.138L14.514 2H9.486l-.623 5.571a2.695 2.695 0 0 0-.005.143C8.858 8.976 10.264 10 12 10Z"
		/>
		<Path fill="#000" d="M3 13a1 1 0 0 1 1-1h1v9a1 1 0 1 1-2 0v-8Z" />
		<Path fill="#000" d="M3 20h18v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1Z" />
		<Path
			fill="#000"
			d="M19 12h1a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-9ZM7 13h1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-4Z"
		/>
		<Rect width={10} height={2} x={7} y={16} fill="#000" rx={1} />
		<Path fill="#000" d="M15 14a1 1 0 0 1 1-1h1v4a1 1 0 1 1-2 0v-3Z" />
	</Svg>
)


const FavoritesIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		fill="none"
		viewBox="0 0 30 30"
		{...props}
	>
		<Path
			fill={props.fill ?? "none"}
			stroke={props.stroke ?? "#000"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M14.335 25.708 4.89 15.692c-2.66-2.82-2.492-7.446.364-10.043 2.833-2.576 7.13-2.075 9.369 1.09l.376.533.376-.532c2.24-3.166 6.536-3.667 9.369-1.09 2.856 2.596 3.023 7.221.363 10.042l-9.443 10.016a.904.904 0 0 1-1.33 0Z" />
	</Svg>
)

const ArrowRightIcon = (props: SvgProps) => (
	<Svg
		width={18}
		height={18}
		viewBox="0 0 18 18"
		fill="none"
		{...props}
	>
		<Path
			stroke={props.stroke ?? '#6D6D6D'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="m6 15 6-6-6-6"
		/>
	</Svg>
)


const SettingsIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
			fill={props.fill ?? "none"}
			stroke={props.stroke ?? '#000'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M20 7h-9M14 17H5M17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
		/>
	</Svg>
)

const ProfileSettingsIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			stroke={props.stroke ?? "#fff"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={props.strokeWidth ?? 1.5}
			d="m13.6 21.076 5.46-3.152c.584-.337.875-.505 1.087-.74a2 2 0 0 0 .416-.72c.097-.301.097-.637.097-1.307V8.843c0-.67 0-1.006-.098-1.307a2 2 0 0 0-.416-.72c-.21-.234-.5-.402-1.079-.736L13.6 2.924c-.583-.337-.874-.505-1.184-.57a2 2 0 0 0-.832 0c-.31.065-.601.233-1.184.57L4.938 6.077c-.582.336-.873.504-1.084.739a2 2 0 0 0-.416.72c-.098.302-.098.638-.098 1.311v6.305c0 .673 0 1.01.098 1.311a2 2 0 0 0 .416.72c.211.236.503.404 1.085.74l5.46 3.153c.584.337.875.505 1.185.57.274.059.558.059.832 0 .31-.065.602-.233 1.185-.57Z"
		/>
		<Path
			stroke={props.stroke ?? "#fff"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={props.strokeWidth ?? 1.5}
			d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
		/>
	</Svg>
)

const NotificationsIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			stroke={props.stroke ?? "#fff"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={props.strokeWidth ?? 1.5}
			d="M6.311 10.464v-.917C6.311 6.483 8.858 4 12 4s5.689 2.483 5.689 5.547v.917c0 1.993.59 3.944 1.702 5.618L20 17H4l.61-.918a10.155 10.155 0 0 0 1.701-5.618Z"
		/>
		<Circle cx={12} cy={21} r={(props.strokeWidth && typeof props.strokeWidth === 'number') ? props.strokeWidth * 1.4 : 2} fill={props.stroke ?? "#fff"} />
	</Svg>
)

const PickUpIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path fill={props.fill ?? '#000'} d="M11 13v2H9v-2h2Z" />
		<Path
			fill={props.fill ?? '#000'}
			fillRule="evenodd"
			d="M6.48 4a2 2 0 0 0-1.561.75l-3.05 3.813C1.083 9.545 1.783 11 3.04 11H4v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7h2v8a1 1 0 0 0 2 0v-8h.96c1.258 0 1.957-1.455 1.171-2.437l-3.05-3.812A2 2 0 0 0 17.52 4H6.48ZM8 11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H8Z"
			clipRule="evenodd"
		/>
	</Svg>
)

const ClockIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			fill={props.fill ?? "#000"}
			d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1Z"
		/>
	</Svg>
)


const BasketIcon = (props: SvgProps) => (
	<Svg
		width={16}
		height={16}

		viewBox="0 0 16 16"
		fill="none"
		{...props}
	>
		<Path
			fill={props.fill ?? '#fff'}
			stroke={props.stroke ?? '#fff'}
			d="M11.808 14.194a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75ZM5.942 14.194a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
		/>
		<Path
			stroke={props.stroke ?? '#fff'}
			strokeLinecap="round"
			strokeWidth={props.strokeWidth ?? 1}
			d="M1.6 2.24h1.479c.245 0 .459.167.517.405l1.696 6.87a.533.533 0 0 0 .518.405h6.217a.533.533 0 0 0 .518-.405l1.322-5.355H6.4"
		/>
	</Svg>
)



const TabBarBasketIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		fill="none"
		viewBox="0 0 30 30"
		{...props}
	>
		<Circle cx={22.4} cy={24.4} r={1.9} fill={props.stroke ?? '#000'} />

		<Circle cx={11.4} cy={24.4} r={1.9} fill={props.stroke ?? '#000'} />

		<Path
			stroke={props.stroke ?? '#000'}
			strokeLinecap="round"
			strokeWidth={2}
			d="M3 4.2h2.772a1 1 0 0 1 .971.76l3.18 12.88a1 1 0 0 0 .971.76H22.55a1 1 0 0 0 .971-.76L26 7.8H12"
		/>
	</Svg>
)


const BackArrowIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		rotation={180}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
			fill={props.fill ?? "none"}
			stroke={props.stroke ?? "#000"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m8 20 8-8-8-8"
		/>
	</Svg>
)

const SortIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			fill={props.fill ?? "#000"}
			stroke={props.stroke ?? "#000"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={0}
			d="M8 15H4l6 6V1H8v14Zm6-11v17h2V7h4l-6-6v3Z" />
	</Svg>
)

const CircleIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		fill="none"
		viewBox="0 0 30 30"
		{...props}
	>
		<Circle cx={15} cy={15} r={13} fill={props.fill !== 'none' ? props.fill : 'black'} />
	</Svg>
)

const MinusIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
			stroke={props.stroke ?? '#000'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M6 12h12"
		/>
	</Svg>
)

const PlusIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
			stroke={props.stroke ?? '#000'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M6 12h6m0 0h6m-6 0v6m0-6V6"
		/>
	</Svg>
)

const InfoIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			fill={props.fill ?? '#000'}
			fillRule="evenodd"
			d="M12.823 1.184c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11Zm-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2h-.5Zm-1.5 4a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
			clipRule="evenodd"
		/>
	</Svg>
)


const QRCodeIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<G
			stroke={props.stroke ?? '#000'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			clipPath="url(#a)"
		>
			<Path d="M17.25 4.5H21v3.75M6.75 19.5H3v-3.75M21 15.75v3.75h-3.75M3 8.25V4.5h3.75M7.5 8.25v7.5M16.5 8.25v7.5M13.5 8.25v7.5M10.5 8.25v7.5" />
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" d="M0 0h24v24H0z" />
			</ClipPath>
		</Defs>
	</Svg>
)

const TrashCanIcon = (props: SvgProps) => (
	<Svg
		width={14}
		height={14}
		viewBox="0 0 14 14"
		fill="none"
		{...props}
	>
		<Path
			fill="#6D6D6D"
			fillRule="evenodd"
			d="M2.985 4.522a.437.437 0 0 1 .465.407l.269 4.025c.052.786.09 1.333.172 1.745.08.399.19.61.35.76.16.149.377.245.781.298.416.055.965.056 1.752.056h.452c.788 0 1.336-.001 1.752-.056.404-.053.622-.15.782-.298.159-.15.27-.361.35-.76.082-.412.119-.959.171-1.745l.269-4.025a.438.438 0 0 1 .873.058l-.27 4.056c-.05.748-.09 1.352-.185 1.827-.098.493-.266.905-.61 1.228-.346.322-.768.462-1.266.527-.48.063-1.086.063-1.836.063h-.512c-.75 0-1.356 0-1.835-.063-.499-.065-.921-.205-1.266-.527-.345-.323-.512-.735-.61-1.228-.095-.475-.135-1.08-.185-1.827l-.27-4.056a.437.437 0 0 1 .407-.465ZM6.04 1.313h-.026c-.126 0-.236 0-.34.016-.41.065-.766.321-.957.69-.049.093-.084.197-.124.317l-.008.026-.057.17a.73.73 0 0 1-.737.531h-1.75a.437.437 0 1 0 0 .875H11.959a.438.438 0 0 0 0-.875h-1.802a.73.73 0 0 1-.684-.531l-.057-.17-.008-.026c-.04-.12-.075-.224-.124-.317a1.313 1.313 0 0 0-.957-.69c-.104-.017-.214-.017-.34-.016H6.041Zm-.706 1.566c-.023.063-.05.125-.08.184h3.491a1.612 1.612 0 0 1-.08-.184l-.022-.066-.058-.175a1.817 1.817 0 0 0-.078-.215.438.438 0 0 0-.319-.23 1.819 1.819 0 0 0-.229-.005H6.041c-.169 0-.203 0-.23.005a.438.438 0 0 0-.318.23 1.819 1.819 0 0 0-.078.215l-.058.175a2.817 2.817 0 0 1-.023.066Z"
			clipRule="evenodd"
		/>
		<Path
			fill="#6D6D6D"
			d="M5.334 2.879c-.023.063-.05.125-.08.184h3.491a1.612 1.612 0 0 1-.08-.184l-.022-.066-.058-.175a1.817 1.817 0 0 0-.078-.215.438.438 0 0 0-.319-.23 1.819 1.819 0 0 0-.229-.005H6.041c-.169 0-.203 0-.23.005a.438.438 0 0 0-.318.23 1.819 1.819 0 0 0-.078.215l-.058.175a2.817 2.817 0 0 1-.023.066Z"
		/>
	</Svg>
)


const RatingStarIcon = (props: SvgProps) => (
	<Svg
		width={10}
		height={10}
		viewBox="0 0 10 10"
		fill="none"
		{...props}
	>
		<G clipPath="url(#a)">
			<Mask
				id="b"
				width={11}
				height={10}
				x={-1}
				y={0}
				maskUnits="userSpaceOnUse"
				style={{
					maskType: "alpha",
				}}
			>
				<Path
					fill="#006FFD"
					d="m9.677 3.363-2.998-.436L5.339.21a.38.38 0 0 0-.678 0l-1.34 2.717-2.998.436a.377.377 0 0 0-.209.644l2.17 2.115-.513 2.986a.377.377 0 0 0 .548.398l2.68-1.41 2.682 1.41a.377.377 0 0 0 .548-.398l-.512-2.986 2.169-2.115a.377.377 0 0 0-.21-.644Z"
				/>
			</Mask>
			<G mask="url(#b)">
				<Path fill="#FFC400" d="M0 0h10v10H0z" />
			</G>
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" d="M0 0h10v10H0z" />
			</ClipPath>
		</Defs>
	</Svg>
)

const PurchaseHistoryIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<G
			stroke={props.stroke ?? "#000"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={props.strokeWidth ?? 1.25}
		>
			<Path d="M11.795 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
			<Path d="M14 18a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM15 3v4M7 3v4M3 11h16" />
			<Path d="M18 16.496V18l1 1" />
		</G>
		<Defs>
			<Path fill="none" d="M0 0h24v24H0z" />
		</Defs>
	</Svg>
)

const MyAddressesIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			stroke={props.stroke ?? "#000"}
			strokeWidth={props.strokeWidth ?? 1.25}
			d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
		/>
		<Path
			stroke={props.stroke ?? "#000"}
			strokeWidth={props.strokeWidth ?? 1.25}
			d="M12 21.7C17.3 17 20 13 20 10a8 8 0 0 0-16 0c0 3 2.7 6.9 8 11.7Z"
		/>
	</Svg>
)

const LegalInformationIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<G
			stroke={props.stroke ?? "#000"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.25}
		>
			<Path d="M12 3.75v16.5M9.75 20.25h4.5M5.25 8.25l13.5-3M2.25 15.75c0 1.657 1.875 2.25 3 2.25s3-.593 3-2.25l-3-7.5-3 7.5ZM15.75 12.75c0 1.657 1.875 2.25 3 2.25s3-.593 3-2.25l-3-7.5-3 7.5Z" />
		</G>
		<Defs>
			<Path fill="#fff" d="M0 0h24v24H0z" />
		</Defs>
	</Svg>
)

const CooperationIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			stroke={props.stroke ?? "#000"}
			strokeWidth={1.25}
			d="M8.561 11.28a2.816 2.816 0 1 0 0-5.633 2.816 2.816 0 0 0 0 5.633ZM14.25 18.727a5.7 5.7 0 0 0-5.704-5.7 5.7 5.7 0 0 0-5.7 5.7H14.25ZM16.549 12.476a2.269 2.269 0 1 0 0-4.537 2.269 2.269 0 0 0 0 4.537ZM15.9 18.727h5.25a4.59 4.59 0 0 0-4.601-4.59 4.578 4.578 0 0 0-2.156.537"
		/>
	</Svg>
)

const PaymentMethodIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			fill={props.stroke ?? "#000"}
			d="M5 14h3.5a1.5 1.5 0 0 1 1.5 1.5V17H6.5A1.5 1.5 0 0 1 5 15.5V14Z"
		/>
		<Path
			stroke={props.stroke ?? "#000"}
			strokeWidth={1.25}
			d="M3.625 9.625h16.75V17A2.375 2.375 0 0 1 18 19.375H6A2.375 2.375 0 0 1 3.625 17V9.625Z"
		/>
		<Path
			fill={props.stroke ?? "#000"}
			d="M3 7.75A2.75 2.75 0 0 1 5.75 5h12.5A2.75 2.75 0 0 1 21 7.75H3Z"
		/>
	</Svg>
)




export default
	{
		ProfileIcon,
		CatalogIcon,
		FavoritesIcon,
		ArrowRightIcon,
		SettingsIcon,
		PickUpIcon,
		ClockIcon,
		BasketIcon,
		BackArrowIcon,
		SortIcon,
		CircleIcon,
		NotificationsIcon,
		ProfileSettingsIcon,
		ShopIcon,
		MinusIcon,
		PlusIcon,
		QRCodeIcon,
		TrashCanIcon,
		TabBarBasketIcon,
		RatingStarIcon,
		InfoIcon,
		PurchaseHistoryIcon,
		MyAddressesIcon,
		LegalInformationIcon,
		PaymentMethodIcon,
		CooperationIcon,
	}
