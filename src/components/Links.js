import user from "../data/user";

function Links (props) {
    return (
        <>
        <h3>Links</h3>
        <a href={user.links.github}>https://github.com/liza</a>
        <a href={user.links.linkedin}>https://www.linkedin.com/in/liza/</a>
        </>
    )
}

export default Links