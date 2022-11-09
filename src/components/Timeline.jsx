import React from 'react'

export default function Timeline() {
    return (
        <div>
            <div className="timeline">
                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right">1 - 25 November 2022</div>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="timeline__title">Pendaftaran</h2>
                    <p className="timeline__paragraph">
                        <li>Seminar</li>
                        <li>Talkshow</li>
                        <li>Workshop</li>
                        <li>Competition</li>
                    </p>
                    <h2 className="timeline__title">Competition</h2>
                    <p className="timeline_paragraph">
                        <li>pengumpulan karya <br></br>(25, November 2022)</li>
                    </p>
                </div>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="timeline__title">Acara</h2>
                    <p className="timeline__paragraph">
                        <li>Talkshow</li>
                    </p>
                    <p className="timeline__paragraph">
                        <li>Workshop</li>
                        <ol >
                            <li>Workshop - Data Science</li>
                            <li>Workshop - Artificial Intelegence</li>
                            <li>Workshop - UI/UX</li>
                        </ol>
                    </p>
                    <h2 className="timeline__title">Competition</h2>
                    <p className="timeline__paragraph">
                        <li>Pengumuman finalis<br></br>(28, November 2022</li>
                    </p>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component">
                    <div className="timeline__date">28 - 29 November 2022</div>
                </div>
                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right">November 30, 2022</div>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="timeline__title">Acara</h2>
                    <p className="timeline__paragraph">
                        <li>Workshop - Game Development</li>
                    </p>
                    <h2 className="timeline__title">Final Comptition</h2>
                    <li>Innovation Technology - Produk</li>
                    <li>Web Design Competition</li>
                </div>
                <div className="timeline__component timeline__component--bottom timeline__component--bg">
                    <h2 className="timeline__title">Acara</h2>
                    <p className="timeline__paragraph">
                        <li>Seminar</li>
                        <li>Penutupan</li>
                    </p>

                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                    <div className="timeline__point timeline__point--bottom"></div>
                </div>
                <div className="timeline__component timeline__component--bottom">
                    <div className="timeline__date">Desember 1, 2022</div>
                </div>
            </div>
        </div>
    )
}
