import Image from "next/image";
import Link from "next/link";

import Unavailable from "/public/assets/unavailable.jpg";

const data = [
    {
        image: Unavailable,
        title: "Title 6",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: Unavailable,
        title: "Title 5",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: Unavailable,
        title: "Title 4",
        description: "Lorem ipsum dolor sit amet."
    }, {
        image: Unavailable,
        title: "Title 3",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: Unavailable,
        title: "Title 2",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: Unavailable,
        title: "Title 1",
        description: "Lorem ipsum dolor sit amet."
    },
]

const Update = () => {
    return (
        <>
            <div className="p-20 min-h-screen h-full bg-secondary snap-center">
                <div className="h-1/2 mx-auto max-w-7xl mb-8 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-bold text-primary text-4xl">Laporan Terkini</p>
                    </div>
                    <div className="mx-auto max-w-2xl mt-8 md:max-w-4xl lg:max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {data.slice(0, 3).map((data) => (
                                <div key={data.title} className="card w-full bg-primary text-neutral shadow-xl">
                                    <figure>
                                        <Image src={data.image} alt={data.title} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.title}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center">
                        <Link className="btn btn-accent text-white" href="">
                            Lihat Selengkapnya
                        </Link>
                    </div>
                </div>
                <div className="h-1/2 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-bold text-primary text-4xl">Statistik Laporan</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="stats stats-vertical lg:stats-horizontal shadow mt-8 bg-primary text-neutral">
                            <div className="stat">
                                <div className="stat-title">Laporan Masuk</div>
                                <div className="stat-value">31K</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Laporan Diproses</div>
                                <div className="stat-value">4,200</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Laporan Terselesaikan</div>
                                <div className="stat-value">1,200</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Update;
