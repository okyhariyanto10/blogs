import InfoPost from "./InfoPost"
import Link from 'next/link'

export default function CardPost({ thumbnail, ...infopost }) {
    return (
        <article>
            <Link href="/detail">
                <a>
                    <img src={thumbnail} className="w-full mb-4" />
                </a>
            </Link>
            <InfoPost
                {...infopost} />
        </article>

    )

}