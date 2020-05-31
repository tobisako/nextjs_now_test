import Head from 'next/head'
import Link from 'next/link'

const Tbs = () => (
  <React.Fragment>
    <Head>
      <title>minna air map demo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h2>TBSのページ</h2>
      <div id="hoge">
        概要：<br/>
        スタジオにエアロシールド（赤外線殺菌装置）を照射する事により、空気中の細菌・ウィルスを24時間不活性化。<br/>
        検査情報：<br/>
        <img src="/tbs_kensa.png" width="95%" />
      </div>
      <div>
        <a href="https://www.tbsradio.jp/">TBSラジオ公式（外部サイト）</a>
      </div>
    </main>
    <Link href='/'><a>地図に戻る</a></Link>
    <style jsx>{`
      main {
        background-image: url(/air_title.png);
        padding: 1rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </React.Fragment>
)

export default Tbs;
