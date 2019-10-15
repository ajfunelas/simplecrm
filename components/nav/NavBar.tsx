import * as React from "react"
import { HeaderNavigation, ALIGN, StyledNavigationItem as NavigationItem, StyledNavigationList as NavigationList } from "baseui/header-navigation"
import { Button } from "baseui/button"

export default () => (
	<HeaderNavigation>
		<NavigationList $align={ALIGN.left}>
			<NavigationItem>SimpleCRM</NavigationItem>
		</NavigationList>
		<NavigationList $align={ALIGN.center} />
		<NavigationList $align={ALIGN.right}>
			{/* <NavigationItem>
				<Link href="#basic-link1">Tab Link One</Link>
			</NavigationItem>
			<NavigationItem>
				<Link href="#basic-link2">Tab Link Two</Link>
			</NavigationItem> */}
		</NavigationList>
		<NavigationList $align={ALIGN.right}>
			<NavigationItem>
				<Button>Nav</Button>
			</NavigationItem>
		</NavigationList>
	</HeaderNavigation>
)
