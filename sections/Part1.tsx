import React from 'react';
import { SectionHeader } from '../components/UI';
import { ExportableSection } from '../components/ExportableSection';
import { BookOpen, Briefcase, Home, UserCheck, GitMerge } from 'lucide-react';

export const Part1: React.FC = () => {
  return (
    <section id="part1" className="space-y-8">
      <SectionHeader 
        title="第一部分：考綱解讀與官方案例題考點剖析" 
        subtitle="深入解析考試模式與核心考點對照"
        icon={<BookOpen size={32} />}
      />

      <div className="space-y-12">
        {/* Section 1 */}
        <ExportableSection label="複製：考試模式">
            <div className="bg-white">
                <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-3 mb-4">一、案例題的基本考試模式</h3>
                <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h4 className="font-bold text-lg mb-3 text-primary-dark">題型定位</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                    <li>案例題屬於考試第二部分，以個案分析形式命題，需綜合運用知識解決實際問題。</li>
                    <li><strong>地產代理資格考試 (EAQE)：</strong>共50題，其中第二部分為20題（基於1-2個個案）。</li>
                    <li><strong>地產營業員資格考試 (SQE)：</strong>共50題，其中第二部分為10題（基於1-2個個案）。</li>
                    </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h4 className="font-bold text-lg mb-3 text-primary-dark">考核目標</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                    <li>測試考生融會貫通知識的能力，包括法規理解、實務操作、風險識別及職業道德。</li>
                    <li>要求考生能夠分析真實交易場景，並作出符合法例和執業守則的判斷。</li>
                    </ul>
                </div>
                </div>
            </div>
        </ExportableSection>

        {/* Section 2 */}
        <ExportableSection label="複製：核心考綱">
            <div>
                <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-3 mt-8 mb-4">二、案例題的核心考綱範圍</h3>
                <p className="text-slate-600 mb-4">案例題覆蓋以下跨領域知識點，需結合具體情境作答：</p>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-8">
                {/* Point 1 & 2 */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-primary text-lg mb-2 flex items-center gap-2"><Briefcase size={20}/> 1. 物業交易流程與文件處理</h4>
                        <div className="space-y-3">
                            <div>
                                <strong className="block text-slate-800 text-sm mb-1">關鍵文件的使用：</strong>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>正確填寫和解釋訂明地產代理協議（表格3-6，根據不同情況選用）、物業資料表格（表格1）、出租資料表格（表格2）。</li>
                                <li>臨時買賣合約的條款審核（如「現狀」出售、空置管有權交付、成交日期、訂金安排等）。</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-800 text-sm mb-1">交易環節的合規性：</strong>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>訂金托管要求（例如應由律師托管，避免直接交予賣方，除非賣方已獲承按人同意）。</li>
                                <li>成交前查核（例如業權負擔、物業現狀、租約條款、政府命令等）。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-primary text-lg mb-2 flex items-center gap-2"><BookOpen size={20}/> 2. 土地查冊與業權分析</h4>
                        <div className="space-y-3">
                            <div>
                                <strong className="block text-slate-800 text-sm mb-1">查冊文件解讀：</strong>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>識別物業的有效產權負擔（如按揭、押記令、建築命令、清拆令、大廈公契註冊、訴訟待決登記等）。</li>
                                <li>分析業權完整性（如聯權共有/分權共有的影響、遺產承辦問題）。</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-800 text-sm mb-1">風險提示責任：</strong>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>須向客戶解釋查冊結果（如違例建築工程、租約限制、地價補價要求），並強烈建議客戶徵詢獨立法律意見。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200"></div>

                {/* Point 3 & 4 */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-primary text-lg mb-2 flex items-center gap-2"><Briefcase size={20}/> 3. 法規與執業守則的應用</h4>
                        <div className="space-y-3">
                            <div>
                                <strong className="block text-slate-800 text-sm mb-1">《地產代理條例》及附屬規例：</strong>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>披露利益衝突（如雙邊代理須獲書面同意、披露個人實益權益、披露額外報酬）。</li>
                                <li>廣告宣傳合規性（如放盤價需獲賣方書面同意、禁止虛假或具誤導性陳述、必須列明牌照號碼等）。</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-800 text-sm mb-1">其他相關法例：</strong>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>《防止賄賂條例》（如禁止索取或接受未經授權的利益）。</li>
                                <li>《個人資料（私隱）條例》（如客戶個人資料的收集、使用、保安及披露限制）。</li>
                                <li>《一手住宅物業銷售條例》（如銷售文件要求、實用面積的定義與披露、價單、售樓說明書等）。</li>
                                <li>《印花稅條例》（如買賣協議、租約的印花稅計算和繳付期限）。</li>
                                <li>《建築物條例》（如建築命令、清拆令、僭建物）。</li>
                                <li>《競爭條例》（Competition Ordinance, Cap. 619）：尤其涉及地產代理公司之間的佣金及優惠安排，旨在防止合謀定價等反競爭行為。</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary text-lg mb-2 flex items-center gap-2"><Home size={20}/> 4. 租務與物業管理</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                            <li><strong>租約條款分析</strong>（如租期、租金、免租期、續租權、維修責任、用途限制等）。</li>
                            <li><strong>印花稅計算</strong>（根據租約年期和租金，並留意不同年期的稅率）。</li>
                            <li><strong>分租限制與業主同意要求</strong>（通常需業主書面同意）。</li>
                            <li><strong>承按人同意</strong>（出租物業前通常需要承按銀行的書面同意）。</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200"></div>

                {/* Point 5 & 6 */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-primary text-lg mb-2 flex items-center gap-2"><Briefcase size={20}/> 5. 建築物合規與用途限制</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                            <li><strong>佔用許可證（「入伙紙」）</strong>的許可用途核查（如住宅、商業、工業）。</li>
                            <li><strong>違例建築工程（如僭建物）</strong>的風險評估、潛在拆卸令及對物業價值的影響。</li>
                            <li><strong>大廈公契對物業使用的約束</strong>（如商用/住宅用途限制、公用地方使用規則、管理費及維修基金責任）。</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary text-lg mb-2 flex items-center gap-2"><UserCheck size={20}/> 6. 倫理與專業責任</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                            <li><strong>受信責任 (Fiduciary Duty)：</strong>客戶利益至上，忠誠、誠實、勤勉。</li>
                            <li><strong>避免失實陳述</strong>（如隱瞞物業缺陷、誇大物業優點或面積、提供不準確信息）。</li>
                            <li><strong>盡職調查義務</strong>（如查核物業歷史、驗證業主身份、核對物業資料）。</li>
                            <li><strong>對弱勢客戶</strong>（如缺乏法律代表、不熟悉交易流程的客戶）的額外保護和建議，確保其獲得公平對待。</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </ExportableSection>

        {/* Section 3 */}
        <ExportableSection label="複製：典型特徵">
            <div>
                <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-3 mt-8 mb-4">三、典型案例題特徵</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <h4 className="font-bold text-primary-dark mb-2 flex items-center gap-2"><GitMerge size={20}/> 場景複雜性強</h4>
                        <p className="text-sm text-slate-600">
                            例如：物業涉及多重按揭、業權繼承問題、建築命令或清拆令、違例用途，要求考生識別關鍵風險點及代理應採取的行動。
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <h4 className="font-bold text-primary-dark mb-2 flex items-center gap-2"><GitMerge size={20}/> 多步驟決策鏈</h4>
                        <p className="text-sm text-slate-600 mb-2">需按邏輯順序處理：</p>
                        <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                            客戶指示 → 訂立代理協議 → 土地查冊 → 物業視察 → 廣告宣傳 → 轉達要約 → 合約談判 → 簽署合約 → 成交安排 → 售後跟進。
                        </div>
                    </div>
                    <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-primary-dark mb-1">跨法例整合</h4>
                        <p className="text-sm text-slate-700">
                            同一案例可能涉及《地產代理條例》及其規例、《建築物條例》、《印花稅條例》、《防止賄賂條例》、《個人資料（私隱）條例》、《一手住宅物業銷售條例》等多部法例和《操守守則》的交疊要求。
                        </p>
                    </div>
                </div>
            </div>
        </ExportableSection>

        {/* Section 4 */}
        <ExportableSection label="複製：考點剖析">
            <div>
                <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-3 mt-8 mb-4">四、官方案例題考點剖析</h3>
                <div className="overflow-x-auto shadow-md rounded-lg border border-slate-200">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-white uppercase bg-primary">
                    <tr>
                        <th className="px-4 py-3 min-w-[120px] text-center align-middle">核心知識模塊</th>
                        <th className="px-4 py-3 min-w-[150px] text-center align-middle">具體考點</th>
                        <th className="px-4 py-3 min-w-[240px] text-center align-middle">相關題目編號 (及案例背景)</th>
                        <th className="px-4 py-3 min-w-[240px] text-center align-middle">考查重點概要</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                    {/* Module 1 */}
                    <tr>
                        <td rowSpan={2} className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">一、代理的披露責任與利益衝突</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">1.1 代理人對客戶的披露義務</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 1 (案例一)：張雁須向范先生披露的事項。</p>
                        <p>- 9 (案例一)：王文須向曹小姐披露的事項。</p>
                        <p>- 8 (2025年4月個案一)：埃瑪與王先生訂立協議前的步驟。</p>
                        <p>- 4 (2025年5月個案二)：王文須向曹小姐披露的事項。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">必須披露可能影響代理人獨立性和忠誠度的利益，如親屬關係、額外獎賞、雙邊代理身份，並取得客戶知情同意。</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold text-primary align-middle">1.2 代理協議 (表格3-6) 的訂立與條款披露</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 2 (2025年4月個案一)：陳信為何在先行事時非須負的責任。</p>
                        <p>- 7 (2025年6月)：王文與王先生訂立表格3的最後期限。</p>
                        <p>- 9 (2025年6月)：陳英業在表格3中第9條的披露。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">明確代理協議必須在關鍵行為（如視察、廣告、向客戶轉達要約、簽署臨約）前訂立，並須向客戶解釋所有條款內容。</td>
                    </tr>

                    {/* Module 2 */}
                    <tr className="bg-slate-50/30">
                        <td rowSpan={2} className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">二、牌照與合規管理</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">2.1 從業員牌照要求與豁免</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 2 (案例一)：王偉是否須要領有牌照。</p>
                        <p>- 4 (2025年4月個案一)：誰可實時從事工作並被委任為經理。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">判斷何種活動需牌照，以及豁免條件（如處理僅自置物業的僱員）。經理（即持牌地產代理（個人）或持牌營業員）必須由持牌地產代理擔任。</td>
                    </tr>
                    <tr className="bg-slate-50/30">
                        <td className="px-4 py-3 font-bold text-primary align-middle">2.2 公司人事變動的通知義務</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 5 (2025年4月個案一)：123地產代理行須向監管局送交的通知。</p>
                        <p>- 5 (2025年5月個案二)：123地產代理行須送交的書面通知。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">經理的委任/終止委任須在7個工作天內書面通知監管局；營業員的僱用/終止僱用須在31天內書面通知監管局。</td>
                    </tr>

                    {/* Module 3 */}
                    <tr>
                        <td rowSpan={3} className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">三、物業產權與文件</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">3.1 產權負擔 (Encumbrances) 的識別與披露</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 1 (2025年6月)：音樂花園物業的有效產權負擔。</p>
                        <p>- 1 (2025年8月)：音樂花園物業的有效產權負擔。</p>
                        <p>- 1 (考試手冊樣題)：甲物業的有效產權負擔。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">根據土地查冊結果，判斷建築命令、清拆令、按揭、押記令、訴訟待決登記、法庭命令等是否仍為有效產權負擔，並須向客戶披露及解釋。</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold text-primary align-middle">3.2 關鍵文件的作用與來源</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 3 (案例一)：顯示物業原來間隔的文件。</p>
                        <p>- 3 (2025年6月)：取得建築命令副本的部門。</p>
                        <p>- 3 (考試手冊樣題)：取得實用面積的訂明來源。</p>
                        <p>- 4 (2025年6月)：政府租契的尚餘年期計算。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">掌握佔用許可證、土地查冊、政府租契、買賣合約、大廈公契等文件的不同用途、權威性及相關部門。</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold text-primary align-middle">3.3 授權書 (Power of Attorney) 的有效性</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 4 (案例一)：能賦予王偉簽署權的文件。</p>
                        <p>- 10 (考試手冊樣題)：盧子彬代陳雅文簽立合約的有效手續。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">授權書必須由業主本人以契據 (Deed) 形式簽立並在土地註冊處註冊，第三方聲明或信件通常不足以賦予簽署權。</td>
                    </tr>

                    {/* Module 4 */}
                    <tr className="bg-slate-50/30">
                        <td rowSpan={3} className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">四、租賃事務</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">4.1 租賃協議的法律要求</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 1 (案例二)：關於準租賃的陳述是否正確。</p>
                        <p>- 2 (案例二)：提早終止租約條款的效果。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">租期超過三年須以契據形式訂立並註冊；提早終止租約的條款不影響《業主與租客（綜合）條例》的適用性，雙方仍須遵守相關規定。</td>
                    </tr>
                    <tr className="bg-slate-50/30">
                        <td className="px-4 py-3 font-bold text-primary align-middle">4.2 租賃管理的合規步驟</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 3 (案例二)：為保障鄧先生利益馬莉應採取的所有步驟。</p>
                        <p>- 8 (2025年8月)：業主簽發租金收據須列明的所有內容。</p>
                        <p>- 9 (2025年8月)：業主可因租客何種行為沒收租賃權。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">取得承按人書面同意（如物業有按揭）、所有業主簽署、備存租約紀錄、簽發合規收據、法定沒收租賃權的條件（如欠租超過15天等）。</td>
                    </tr>
                    <tr className="bg-slate-50/30">
                        <td className="px-4 py-3 font-bold text-primary align-middle">4.3 租賃的終止方式</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 4 (案例二)：租賃的終止日期。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">固定期租賃屆滿自動終止，或雙方協議終止（並簽署退租協議）。2004年後已廢除CR101通知書制度（即不再自動續租）。</td>
                    </tr>

                    {/* Module 5 */}
                    <tr>
                        <td rowSpan={3} className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">五、交易流程與風險管理</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">5.1 臨時買賣合約與訂金處理</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 10 (案例一)：王文處理曹小姐出價時違反《常規規例》的原因。</p>
                        <p>- 7 (2025年8月)：安格斯安排咪咪簽署漏空合約的違規。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">代理無權自行拒絕要約，必須盡快傳告客戶；禁止簽署要項漏空的臨時合約；訂金應由律師托管。</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold text-primary align-middle">5.2 反洗錢/恐怖分子資金籌集規定</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 5 (案例一)：張雁應符合《打擊洗錢及恐怖分子資金籌集條例》的步驟。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">完成客戶盡職審查 (CDD)、備存紀錄、識別和核實客戶身份、舉報可疑交易報告 (STR)。</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold text-primary align-middle">5.3 印花稅 (Stamp Duty)</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 5 (案例二)：關於繳付租賃文件印花稅的陳述。</p>
                        <p>- 2 (2025年6月)：租約應繳的印花稅計算。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">印花稅由交易雙方協商支付，無強制平分；繳付期限為簽立後30天內，與租約年期無關；按平均年租和印花稅率計算。</td>
                    </tr>

                    {/* Module 6 */}
                    <tr className="bg-slate-50/30">
                        <td rowSpan={2} className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">六、廣告與宣傳規範</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">6.1 廣告內容真實性</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 9 (2025年6月)：關於物業A廣告的陳述。</p>
                        <p>- 6 (考試手冊樣題)：陳英可以何種價格刊登廣告。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">廣告價格必須與客戶指示一致，不得包含虛假、誤導性或不準確的內容（如面積、物業狀況、銀主盤狀態等），並須列明牌照號碼。</td>
                    </tr>
                    <tr className="bg-slate-50/30">
                        <td className="px-4 py-3 font-bold text-primary align-middle">6.2 賣方書面同意</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                            <p>- 6 (2025年8月)：安格斯刊登廣告前是否須取得馬克同意。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">發出任何物業廣告前必須取得賣方（或其授權代表）的書面同意，此為前置強制性程序。</td>
                    </tr>

                    {/* Module 7 */}
                    <tr>
                        <td rowSpan={2} className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">七、一手住宅物業銷售</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">7.1 一手盤銷售特別規定</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 1, 2 (2025年7月)：銷售地點的秩序、推廣活動中的持牌人責任。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">委任總樓盤監督、銷售人員必須佩戴清晰的職員證、銷售前簡介會、即時披露代理身份、必須以實用面積計價、提供價單和售樓說明書等。</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold text-primary align-middle">7.2 《地產代理常規（一般）規例》中訂明代理協議表格的豁免情況</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                            <p>- 3 (2025年7月)：無需訂立訂明地產代理協議的情況。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">銷售一手住宅物業、租賃非獨立單位、或為個人出售/出租自己擁有的物業等情況，可獲豁免使用訂明地產代理協議表格（表格3-6）。注意：這豁免是指表格的使用，而非《地產代理條例》或《常規規例》的全部要求。</td>
                    </tr>

                    {/* Module 8 */}
                    <tr className="bg-slate-50/30">
                        <td className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">八、建築物管理法規</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">8.1 《建築物管理條例》的應用</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 1, 2, 3, 4, 5, 6 (2025年9月)：涉及業主立案法團的責任、權力、基金、訴訟等。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">業主立案法團的法律地位、職責、管理費及維修基金的管理、對公用部分的管理和維修權力、召開業主大會的規定。</td>
                    </tr>

                    {/* Module 9 */}
                    <tr>
                        <td rowSpan={2} className="px-4 py-3 font-bold text-slate-800 bg-slate-50 border-r align-middle text-center">九、違規後果與紀律處分</td>
                        <td className="px-4 py-3 font-bold text-primary align-middle">9.1 無牌執業處罰</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                        <p>- 6 (2025年7月)：無牌從事地產代理工作的處罰。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">循公訴程序定罪，可處罰款$500,000及監禁2年（首次定罪）。</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-bold text-primary align-middle">9.2 違反《地產代理條例》或《常規規例》的後果</td>
                        <td className="px-4 py-3 align-middle space-y-2">
                            <p>- 10 (案例一)：王文處理出價違規的原因。</p>
                            <p>- 8 (考試手冊樣題)：寶利對亞新投訴的有理據項。</p>
                        </td>
                        <td className="px-4 py-3 align-middle">分析具體行為（如未轉達要約、提供失實資料、未經書面同意刊登廣告、利益衝突等）為何及如何違反《地產代理條例》或其附屬規例，以及可能導致的紀律處分（如警告、譴責、罰款、暫時吊銷牌照或撤銷牌照）。</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </ExportableSection>
      </div>
    </section>
  );
}