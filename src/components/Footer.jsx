const socials = [
    {
        id: "0",
        title: "Github",
        iconUrl: 'src/assets/socials/github.svg',
        url: "#",
    },
    {
        id: "1",
        title: "LinkedIn",
        iconUrl: 'src/assets/socials/linkedin.svg',
        url: "#",
    },
    {
        id: "2",
        title: "Discord",
        iconUrl: 'src/assets/socials/discord.svg',
        url: "#",
    },


];
const Footer = () => {
    return (

        <div className="bg-lime-100 py-14 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <p className="text-purple-700 lg:block">{new Date().getFullYear()}. All rights reserved - Susanna Inkiläinen</p>

                </div>
            </div>

            </div>

    )
}
export default Footer