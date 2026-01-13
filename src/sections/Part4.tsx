import React from 'react';
import { SectionHeader, LawCard, OrderedList, List } from '../components/UI';
import { ExportableSection } from '../components/ExportableSection';
import { Gavel, AlertOctagon, GitPullRequest, RotateCcw, AlertTriangle } from 'lucide-react';

export const Part4: React.FC = () => {
  return (
    <section id="part4" className="space-y-10">
      <SectionHeader title="第四部分：違規後果與紀律處分機制深度解析" icon={<Gavel size={32} />} />
      
      <p className="text-slate-600 mb-4">
          持牌人未能遵守《地產代理條例》、其附屬法例、《操守守則》及地產代理監管局（EAA）發出的指引，將面臨嚴重的法律和紀律後果。本部分將系統梳理從調查、紀律研訊到制裁的完整程序及可能後果。
      </p>

      {/* Investigation Process */}
      <ExportableSection label="複製：調查與紀律程序">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <GitPullRequest size={24}/> 調查與紀律程序深度解析 (Investigation & Disciplinary Process)
            </h3>
            
            <div className="mb-6">
                <strong className="text-primary-dark block mb-2 text-lg">一、觸發調查與紀律程序的情形 (Circumstances Triggering Investigation & Disciplinary Proceedings)</strong>
                <p className="text-sm text-slate-600 mb-2">根據《地產代理條例》第28及29條，監管局在以下情況下可啟動調查或紀律程序：</p>
                <OrderedList items={[
                    "<strong>監管局主動調查：</strong>當監管局有理由相信條例的規定可能未被遵守或已遭違反時，可書面委任調查員進行調查。",
                    "<strong>接獲投訴：</strong>任何人對持牌人的行為提出投訴，指控其：<ul class=\"list-disc pl-5 mt-1 text-slate-600\"><li>沒有遵守或違反《地產代理條例》的任何條文；</li><li>沒有資格持有或繼續持有牌照（即不符合「適當人選」的要求）；</li><li>沒有遵守附加於其牌照上的任何條件；</li><li>沒有遵守或違反根據條例訂立的任何規例（例如《地產代理常規（一般）規例》）；</li><li>沒有遵守或違反任何《打擊洗錢及恐怖分子資金籌集條例》（Cap. 615）下的規定。</li></ul>",
                    "<strong>行政總裁呈述：</strong>監管局行政總裁如有理由相信上述任何情況適用於任何持牌人，必須將該等事實向監管局呈述。"
                ]} />
            </div>

            <div>
                <strong className="text-primary-dark block mb-4 text-lg">二、調查與紀律程序流程 (Investigation & Disciplinary Process Flow)</strong>
                <p className="text-sm text-slate-600 mb-4">該流程旨在確保程序公正，給予持牌人申辯的權利。其核心流程如下：</p>
                
                <div className="relative border-l-2 border-primary/20 ml-4 space-y-8 py-2">
                    <div className="ml-8 relative">
                        <span className="absolute -left-11 top-0 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md">1</span>
                        <strong className="block text-primary">初步調查與通知</strong>
                        <p className="text-sm text-slate-600 mt-1">
                            調查員會收集證據，並在有需要時要求持牌人提供解釋或文件。如調查後建議考慮紀律行動，監管局會向持牌人發出<strong>書面通知</strong>，告知其建議的紀律行動及理由。
                        </p>
                    </div>
                    <div className="ml-8 relative">
                        <span className="absolute -left-11 top-0 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md">2</span>
                        <strong className="block text-primary">申述機會 (Representation)</strong>
                        <p className="text-sm text-slate-600 mt-1">
                            持牌人有權在收到通知後 <strong>21天內</strong>（或監管局准許的更長時間內），就建議的紀律行動向監管局作出<strong>書面申述</strong>。監管局在未考慮這些申述前，不得作出處分。
                        </p>
                    </div>
                    <div className="ml-8 relative">
                        <span className="absolute -left-11 top-0 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md">3</span>
                        <strong className="block text-primary">紀律研訊 (Inquiry)</strong>
                        <p className="text-sm text-slate-600 mt-1">
                            若申述未能解決問題，監管局或紀律委員會會舉行<strong>紀律研訊</strong>。持牌人及其法律代表有權出席研訊，陳述案情、盤問證人及提交證據。
                        </p>
                    </div>
                    <div className="ml-8 relative">
                        <span className="absolute -left-11 top-0 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md">4</span>
                        <strong className="block text-primary">裁決與通知</strong>
                        <p className="text-sm text-slate-600 mt-1">
                            研訊後，監管局或紀律委員會會作出決定，並須在<strong>21天內</strong>將決定及理由以<strong>書面通知</strong>持牌人。如決定暫時吊銷或撤銷牌照，還須在<strong>憲報刊登公告</strong>，並在監管局網站上公布。
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </ExportableSection>

      {/* Disciplinary Powers Table */}
      <ExportableSection label="複製：紀律處分與後果">
        <div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <AlertTriangle size={24}/> 三、紀律制裁權與可能後果 (Disciplinary Powers & Potential Consequences)
            </h3>
            <p className="text-sm text-slate-600 mb-4">根據《地產代理條例》第30條，一旦裁定持牌人違規（包括違反條例、規例或《操守守則》），地產代理監管局或紀律委員會可行使以下一項或多項權力：</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-600">
                <thead className="text-xs text-white uppercase bg-slate-700">
                  <tr>
                    <th className="px-6 py-3 rounded-tl-lg min-w-[150px]">制裁措施</th>
                    <th className="px-6 py-3 rounded-tr-lg">具體內容與影響</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-primary-dark">發出警告或譴責</td>
                    <td className="px-6 py-4">對持牌人的不當行為作出正式的<strong>書面警告</strong>或<strong>公開譴責</strong>，並記錄在案。這可能影響其專業聲譽。</td>
                  </tr>
                  <tr className="bg-slate-50 border-b hover:bg-slate-100">
                    <td className="px-6 py-4 font-bold text-primary-dark">附加或更改牌照條件</td>
                    <td className="px-6 py-4">在持牌人的牌照上附加新的條件或更改現有條件。例如，要求持牌人完成特定的<strong>持續專業進修課程 (CPD)</strong>、通過額外考試、或限制其不得從事某類特定業務。</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-primary-dark">暫時吊銷牌照</td>
                    <td className="px-6 py-4"><strong>暫停持牌人的執業資格</strong>，期限最長不超過<strong>2年</strong>。在此期間，持牌人被禁止從事任何地產代理工作。</td>
                  </tr>
                  <tr className="bg-red-50 border-b hover:bg-red-100">
                    <td className="px-6 py-4 font-bold text-red-800">撤銷牌照</td>
                    <td className="px-6 py-4"><strong>最嚴厲的處罰。</strong>永久取消持牌人的執業資格，意味著其失去在地產代理行業從業的資格。</td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-primary-dark">施加罰款</td>
                    <td className="px-6 py-4">判處不超過<strong>港幣 30 萬元</strong>的罰款。此罰款是行政處罰，與刑事罰款分開計算。</td>
                  </tr>
                  <tr className="bg-slate-50 hover:bg-slate-100">
                    <td className="px-6 py-4 font-bold text-primary-dark">命令支付費用</td>
                    <td className="px-6 py-4">命令持牌人支付監管局或紀律委員會在調查和紀律研訊程序中涉及的部分或全部費用。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <strong className="text-primary-dark flex items-center gap-2 mb-2"><AlertOctagon size={18}/> 重要提示：抗辯基礎 (Defense)</strong>
                <p className="text-sm text-slate-700">
                    根據《地產代理條例》第27條（關於刑事罪行）及第30條（關於紀律處分），如持牌人能證明已採取<strong>一切合理步驟</strong>並已<strong>盡一切應盡的努力</strong>以避免該違規行為，則可能免於紀律處分。這強調了<strong>盡職調查</strong>的重要性，並為持牌人提供了抗辯的基礎。
                </p>
            </div>
          </div>
        </div>
      </ExportableSection>

      <div className="grid md:grid-cols-2 gap-6">
        <ExportableSection label="複製：刑事罪行">
          <LawCard title="四、刑事罪行與罰則 (Criminal Offences & Penalties)">
            <p className="text-sm mb-3 text-slate-600">某些嚴重違規行為不僅構成違紀，更直接觸犯《地產代理條例》下的<strong>刑事罪行</strong>。根據條例第55條，一經定罪，最高可處<strong>罰款港幣50萬元及監禁2年</strong>。主要罪行包括：</p>
            <List items={[
              "<strong>無牌執業：</strong>違反第15或16條，未持有有效牌照而從事地產代理工作。",
              "<strong>作出虛假或誤導性陳述：</strong>在牌照申請、續期、調查或紀律研訊過程中，作出在要項上虛假或具誤導性的陳述。",
              "<strong>拒絕配合調查：</strong>無合理辯解而拒絕回答調查員的問題或交出相關文件。",
              "<strong>妨礙監管局人員：</strong>在監管局人員執行職能時進行妨礙。",
              "<strong>違反客戶款項信託帳戶規定：</strong>例如將客戶款項與公司營運資金混合。"
            ]} />
            <p className="text-xs text-slate-500 mt-2 italic">此外，持牌人如在執業過程中觸犯其他法例（如《防止賄賂條例》、《個人資料（私隱）條例》、《競爭條例》、《一手住宅物業銷售條例》等），也須承擔相應的刑事或民事責任。</p>
          </LawCard>
        </ExportableSection>

        <ExportableSection label="複製：上訴機制">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2 text-lg">
                      <RotateCcw size={22} /> 五、上訴機制 (Appeal Mechanism)
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                      持牌人如不服監管局的決定（例如拒絕批給牌照、暫時吊銷或撤銷牌照、罰款等），可根據《地產代理條例》第31條，在收到通知後 <strong>21天內</strong>，向<strong>香港特別行政區行政長官會同行政會議</strong>提出上訴。
                  </p>
              </div>
              <div className="bg-slate-50 p-4 rounded mt-6 border border-slate-100">
                  <strong className="text-slate-800 text-sm block mb-1">小結：</strong>
                  <p className="text-xs text-slate-600">
                      合規經營是地產代理生存和發展的底線。深入理解紀律程序和後果，有助於從業員時刻保持警惕，在執業過程中嚴格自律，避免觸犯紅線。
                  </p>
              </div>
          </div>
        </ExportableSection>
      </div>
    </section>
  );
};