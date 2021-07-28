import Link from 'next/link'
import Layout from '../../components/MainLayout'
import DataDaftarIsi from '../../data/daftar-isi'
import Head from 'next/head'

import { BASE_PATH } from '../constants'

function MateriKenegaraanPage() {
  const FilteredData = DataDaftarIsi.find((bab) => bab.href === '/materi-kenegaraan/')

  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'WebSite',
              id: BASE_PATH,
              name: 'Buku Saku Pramuka',
              url: BASE_PATH
            })
          }}
        />
      </Head>

      <div className="text-center">
        <h1 className="mt-8 text-3xl font-bold md:text-4xl">Buku Saku Pramuka</h1>
      </div>
      <div className="text-left">
        <div>
          <h2 className="mt-8 mb-4 text-xl font-medium md:text-2xl">{FilteredData.text}</h2>
          <ul>
            {FilteredData.children.map((babChild) => (
              <li className="mb-2" key={babChild.href}>
                <h3 className="mb-2 font-medium text-link">
                  <Link href={babChild.href}>
                    <a title={babChild.text}>{babChild.text}</a>
                  </Link>
                </h3>

                {babChild.children && babChild.children.length > 0 && (
                  <ol>
                    {babChild.children.map((li, index) => (
                      <li key={index} className="ml-4 text-link">
                        <Link href={li.href}>
                          <a title={li.text}>{li.text}</a>
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          Tidak menemukan yang kamu cari? Kamu bisa membuat permintaan penambahan data baru melalui
          {` `}
          <a
            href="https://github.com/mazipan/buku-saku-pramuka/issues/new"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-link-secondary"
          >
            Github issue
          </a>
        </div>
      </div>
    </Layout>
  )
}

export function reportWebVitals({ id, name, label, value }) {
  // eslint-disable-next-line no-undef
  window.ga('send', 'event', {
    eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true // avoids affecting bounce rate.
  })
}

export default MateriKenegaraanPage