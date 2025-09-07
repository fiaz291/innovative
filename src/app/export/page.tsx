'use client';
import heroImg from '../../assets/export-hero.webp';
import Navbar from "@/components/Navbar";

export default function ExportPage() {
    return (
    <div>
        <div
        
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="pb-45 text-black w-full bg-no-repeat bg-center md:bg-cover">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center justify-between font-black mx-5 md:mx-30 h-50 h-300 pt-45">
                  <div className="text-2xl md:text-6xl text-center">{`Innovative Export`}</div>
                  <div className="font-normal text-base md:text-2xl text-center whitespace-pre-line mb-[-80px]">{`Produly delivering quality products from Pakistan to markets around the world.\nCommitted to excellence across international borders.`}</div>
              </div>
        </div>

        <div className="p-10 max-w-7xl mx-auto">
          <h1 className="text-xl md:text-4xl font-black mb-6 decoration-blue-600 mt-20">
            For Export Queries
          </h1>
          <form onSubmit={() => {}} className="space-y-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="mb-4 block">{`Your Name*`}</label>
                <input
                  type="text"
                  name="name"
                  onChange={() => {}}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="mb-4 block">{`Contact No`}</label>
                <input
                  type="text"
                  name="contact"
                  onChange={() => {}}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="mb-4 block">{`Email*`}</label>
                <input
                  type="email"
                  name="email"
                  onChange={() => {}}
                  required
                  className="w-full border p-2 rounded"
                />
                <label className="mb-2 mt-4 block">{`Type of business`}</label>
                <div className="flex items-center justify-between mb-5">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="distributor" /> Distributor
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="trader" /> Trader
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="exporter" /> Exporter/Importer
                  </label>
                </div>
                <div className='mt-4 flex items-center gap-2'>
                  <label className="whitespace-nowrap">{`Others`}</label>
                  <input
                    type="text"
                    name="others"
                    onChange={() => {}}
                    required
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>
              <div>
                <label className="mb-4 block">{`Business Name & Address`}</label>
                <textarea
                  name="business"
                  onChange={() => {}}
                  className="w-full border p-4 rounded resize-none"
                  rows={6}
                  required
                />
              </div>

              <div>
                <label className="mb-4 block">{`Country/Origin`}</label>
                <input
                  type="text"
                  name="origin"
                  onChange={() => {}}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="mb-4 block">{`Business Profile`}</label>
                <input
                  type="text"
                  name="profile"
                  onChange={() => {}}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <input
                  type="file"
                  multiple
                  className="w-full border p-2 rounded bg-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-gray-600 hover:file:bg-gray-500"
                />
              </div>
              <div className='flex'>
                <button
                  type="submit"
                  className="bg-black text-white px-12 py-2 rounded-full hover:bg-gray-800"
                >
                  Submit
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    );
  }
  