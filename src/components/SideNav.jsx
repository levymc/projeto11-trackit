export default function SideBar(){

    return (
        <div>
            <style>
                {`
                        #root > div > div {
                        z-index: 99999 !important;
                        }
                    `}
            </style>
            <SideNav
                id="SideNav-33"
                options={{
                draggable: true
                }}
                trigger={<Button node="button">SIDE NAV DEMO</Button>}
            >
                <SideNavItem
                user={{
                    background: 'https://placeimg.com/640/480/tech',
                    email: 'jdandturk@gmail.com',
                    image: 'static/media/react-materialize-logo.824c6ea3.svg',
                    name: 'John Doe'
                }}
                userView
                />
                <SideNavItem
                href="#!icon"
                icon={<Icon>cloud</Icon>}
                >
                First Link With Icon
                </SideNavItem>
                <SideNavItem href="#!second">
                Second Link
                </SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>
                Subheader
                </SideNavItem>
                <SideNavItem
                href="#!third"
                waves
                >
                Third Link With Waves
                </SideNavItem>
            </SideNav>
        </div>
    )
}