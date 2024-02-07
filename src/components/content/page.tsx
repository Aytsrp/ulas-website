import Image from "next/image";

import Economy from "/public/assets/icons/economy.png";
import Education from "/public/assets/icons/education.png";
import Healtcare from "/public/assets/icons/healthcare.png";
import Infrastructure from "/public/assets/icons/infrastructure.png";
import PublicService from "/public/assets/icons/public_service.png";
import Residence from "/public/assets/icons/residence.png";
import Security from "/public/assets/icons/security.png";
import SocialCulture from "/public/assets/icons/social_culture.png";
import Technology from "/public/assets/icons/technology.png";
import Transportation from "/public/assets/icons/transportation.png";

const categories = [
    {
        image: Economy,
        name: "Ekonomi dan Pengembangan Usaha",
        description: "Aduan dan aspirasi terkait kondisi ekonomi, peluang usaha, perizinan, perpajakan, kredit, bantuan, dan lainnya.",
    },
    {
        image: Education,
        name: "Pendidikan dan Sumber Daya Manusia",
        description: "Aduan dan aspirasi terkait kualitas, akses, biaya, fasilitas, kurikulum, kebijakan pendidikan, dan pengembangan SDM.",
    },
    {
        image: Healtcare,
        name: "Kesehatan dan Lingkungan Hidup",
        description: "Aduan dan aspirasi terkait pelayanan kesehatan, kesejahteraan, kebersihan, sanitasi, dan lingkungan hidup, dan lainnya.",
    },
    {
        image: Infrastructure,
        name: "Infrastruktur dan Lingkungan",
        description: "Aduan dan aspirasi terkait pembangunan, perawatan, dan pemanfaatan infrastruktur dan lingkungan, dan lainnya.",
    },
    {
        image: PublicService,
        name: "Pelayanan Publik",
        description: "Aduan dan aspirasi terkait kualitas, akses, biaya, dan kebijakan pelayanan publik oleh pemerintah atau lembaga publik lainnya.",
    },
    {
        image: Residence,
        name: "Pemukiman dan Perumahan",
        description: "Aduan dan aspirasi terkait kondisi, ketersediaan, kelayakan, dan kebijakan pemukiman dan perumahan, dan lainnya.",
    },
    {
        image: Security,
        name: "Keamanan dan Ketertiban",
        description: "Aduan dan aspirasi terkait situasi, upaya, dan kebijakan keamanan dan ketertiban, dan lainnya.",
    },
    {
        image: SocialCulture,
        name: "Sosial dan Budaya",
        description: "Aduan dan aspirasi terkait kehidupan, kearifan, dan kebijakan sosial dan budaya, dan lainnya.",
    },
    {
        image: Technology,
        name: "Teknologi dan Inovasi",
        description: "Aduan dan aspirasi terkait perkembangan, pemanfaatan, dan kebijakan teknologi dan inovasi, dan lainnya.",
    },
    {
        image: Transportation,
        name: "Transportasi dan Mobilitas",
        description: "Aduan dan aspirasi terkait ketersediaan, kualitas, biaya, dan kebijakan transportasi dan mobilitas, dan lainnya.",
    },
]


const Content = () => {
    return (
        <>
            <div className="min-h-screen bg-primary py-20 text-neutral snap-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="text-base font-semibold leading-7 text-accent
                         uppercase">
                            Lapor Sekarang!
                        </p>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Kategori Laporan
                        </p>
                        <p className="mt-1 text-lg leading-8 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis deleniti nihil harum dolorum porro, quam eos minima similique esse, nisi vitae voluptates nulla? Necessitatibus voluptate sit nobis ea impedit.
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl mt-2 lg:max-w-7xl">
                        <dl className="grid max-w-2xl grid-cols-2 gap-x-8 lg:max-w-none lg:grid-cols-5 lg:gap-y-1">
                            {categories.map((category) => (
                                <div key={category.name} className="relative pt-16 text-center">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="p-2 mb-3 left-0 right-0 top-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary m-auto">
                                            <Image src={category.image} alt={category.name} />
                                        </div>
                                        {category.name}
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-sm text-gray-600">{category.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;