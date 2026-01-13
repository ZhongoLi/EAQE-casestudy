import React from 'react';
import { SectionHeader, InfoCard, List } from '../components/UI';
import { ExportableSection } from '../components/ExportableSection';
import { Building, Key, Home, AlertTriangle, FileWarning, ShieldCheck } from 'lucide-react';

export const Part3: React.FC = () => {
  return (
    <section id="part3" className="space-y-12">
      <SectionHeader title="第三部分：專題領域深度解析" icon={<Building size={32} />} />

      {/* Topic 1: Lease */}
      <ExportableSection label="複製：租賃專題">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-4">
            <Key className="text-primary" /> 專題一：租賃事務深度解析 (In-depth Analysis of Lease Matters)
            </h3>
            <p className="text-sm text-slate-600 mb-6">租賃是地產代理最核心的業務之一，涉及複雜的法律關係和法定程序。持牌人必須精準掌握從委託關係建立到租約履行完畢的全流程規範，以保障業主和租客的合法權益。</p>
            
            <div className="space-y-8">
            <div>
                <h4 className="font-bold text-lg text-primary mb-2">一、核心法規依據 (Core Regulatory Basis)</h4>
                <ul className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
                    <li><strong>《地產代理常規（一般）規例》（Estate Agents Practice (General) Regulation, Cap. 511C）：</strong>規範地產代理在租賃交易中的行為和責任。</li>
                    <li><strong>《業主與租客（綜合）條例》（Landlord and Tenant (Consolidation) Ordinance, Cap. 7）：</strong>規管業主與租客之間的權利和義務，特別是其中第IVA部對分間單位（「劏房」）的規管。</li>
                    <li><strong>《地產代理條例》（Estate Agents Ordinance, Cap. 511）：</strong>提供地產代理的牌照制度和紀律處分框架。</li>
                    <li><strong>《地產代理操守守則》（Code of Ethics）：</strong>提供地產代理在租賃業務中的專業行為和道德標準。</li>
                    <li>地產代理監管局發出的相關<strong>《執業通告》</strong>（例如處理分間單位租賃的指引等）。</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg text-primary mb-2">二、租賃代理關係的建立：訂明表格的正確應用 (Establishing Lease Agency Relations)</h4>
                <p className="text-sm mb-2 text-slate-600">地產代理在接獲租賃委託時，必須使用由地產代理監管局訂明的代理協議表格：</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-3">
                    <div className="p-4 bg-blue-50 rounded border border-blue-100">
                        <strong className="block text-primary text-lg mb-1">表格 2</strong>
                        <span className="text-sm text-slate-700">地產代理協議（業主）<br/>代表業主（出租人）</span>
                    </div>
                    <div className="p-4 bg-blue-50 rounded border border-blue-100">
                        <strong className="block text-primary text-lg mb-1">表格 4</strong>
                        <span className="text-sm text-slate-700">地產代理協議（租客）<br/>代表租客（承租人）</span>
                    </div>
                    <div className="p-4 bg-blue-50 rounded border border-blue-100">
                        <strong className="block text-primary text-lg mb-1">表格 5</strong>
                        <span className="text-sm text-slate-700">地產代理協議（業主及租客）<br/>雙邊代理 (Dual Agency)</span>
                    </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">* 若持牌人同時代表業主和租客（即雙邊代理），則必須使用<strong>《表格5》</strong>。根據《常規規例》第10條，代理必須在協議內<strong>明確披露此雙邊代理關係，並獲得雙方客戶的書面同意</strong>，同時清晰列明雙方的佣金安排。</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h4 className="font-bold text-lg text-primary mb-2">三、租約的形式與註冊 (Form and Registration of Lease)</h4>
                <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
                    <li><strong>租期不超過3年：</strong>可以非契據形式（如簡單書面協議）訂立。口頭租約若符合《物業轉易及財產條例》（Cap. 219）第4(2)條的條件（即租期不超過3年、租金為市值租金，且租客持續管有），則具有法律效力，即使未註冊，租客的權益也能對抗後續的買家。然而，為保障各方利益，<strong>強烈建議訂立書面租約</strong>。</li>
                    <li><strong>租期超過3年：</strong>必須以<strong>契據 (Deed)</strong> 形式訂立。契據需由各方簽署、蓋章及交付。
                        <br/><strong>註冊：</strong>為期超過3年的租契必須在土地註冊處註冊，才能充分保障租客的權益，使其對後續的業主具有對抗第三方的法律約束力。
                    </li>
                </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-primary mb-2">四、《業主與租客（綜合）條例》第IVA部的應用（分間單位/「劏房」）</h4>
                    <div className="bg-slate-50 p-4 rounded text-sm space-y-3 border border-slate-200">
                    <p className="text-slate-700">這是租賃事務中風險最高、規定最細的領域，持牌人必須嚴格執行監管局通告指引。</p>
                    <div>
                        <strong className="block text-primary mb-1">「規管租賃」的定義：</strong>
                        <ul className="list-disc pl-5 text-xs text-slate-600">
                            <li>(a) 租賃在 2022年1月22日當日或之後開始；</li>
                            <li>(b) 屬住宅租賃；</li>
                            <li>(c) 處所屬分間單位（即建築物單位的一部分）；</li>
                            <li>(d) 租客是自然人；</li>
                            <li>(e) 租賃的目的是作為租客本身的住宅；</li>
                            <li>(f) 租賃並非條例附表6指明的豁免租賃（如旅館、學生宿舍等）。</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="block text-primary mb-1">持牌人的強制性責任（在安排客戶訂立協議前必須完成）：</strong>
                        <ul className="list-disc pl-5 text-xs text-slate-600">
                            <li><strong>身份披露：</strong>告知準租客持牌人在交易中的身份（代表誰）。</li>
                            <li><strong>解釋主要規定：</strong>向客戶（尤其是租客）解釋第IVA部的主要規定，包括：
                                <br/>- <strong>租住權保障：</strong>規管週期為4年（由首個為期2年的租期及緊隨的第二個為期2年的租期組成）。租客在符合條件下有權續租。業主在首個租期內不得提前終止租約。
                                <br/>- <strong>租金規管：</strong>首個租期內業主不得加租。第二個租期的租金漲幅受法定公式規管，不得超過差餉物業估價署公布的租金指數的變動百分率，且每次加租不得超過10%（與原租金比較）。
                                <br/>- <strong>強制性條款：</strong>解釋所有隱含的強制性條款（例如業主維修責任、租客不得作非法用途、業主不得過度收費等）。
                            </li>
                            <li><strong>提供摘要副本：</strong>向客戶提供規管租賃所隱含的強制性條款的摘要副本（即表格CR110）。</li>
                            <li><strong>建議書面租約：</strong>強烈建議客戶以書面形式達成租賃，以清晰反映協議內容。</li>
                            <li><strong>提醒不一致條款無效：</strong>告知客戶，租約中任何與法定保障和強制性條款不一致的條款均屬無效。</li>
                            <li><strong>建議尋求意見：</strong>建議客戶在有需要時向差餉物業估價署查詢和/或尋求法律意見。</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 border-t pt-6">
                <div>
                    <h4 className="font-bold text-lg text-primary mb-2">五、表格CR109（新租出或重訂協議通知書）</h4>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
                        <li><strong>法定要求：</strong>住宅租約的業主須在<strong>簽立租約後1個月內</strong>，向差餉物業估價署遞交<strong>表格CR109</strong>以作備案。</li>
                        <li><strong>持牌人責任：</strong>必須提醒業主此項法定義務。</li>
                        <li><strong>嚴重後果：</strong>若逾期遞交，業主會被罰款。若完全沒有遞交，業主將無權通過法律途徑向租客追討租金（即<strong>「雙重懲罰」</strong>）。</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-primary mb-2">六、租約的關鍵條款與持牌人責任</h4>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
                        <li><strong>物業詳情：</strong>地址必須與土地查冊一致。包括的泊車位、天台等附屬物業須清楚列明。</li>
                        <li><strong>租約期限：</strong>明確列明租期、起止日期、免租期（如有）、續租權（如有）、解約條款（如有）。</li>
                        <li><strong>用途條款：</strong>必須正確述明物業用途（如「住宅」、「辦公室」），不得誤導。</li>
                        <li><strong>租金與按金：</strong>不得在業主未實際收到按金或上期租金前，安排業主簽署收訖確認。不得在所有應付款項（包括按金及首期租金）未實際收妥前，將物業鑰匙交予租客並安排其入伙。</li>
                        <li><strong>傢俬電器清單：</strong>如租賃包括傢俬電器，<strong>強烈建議</strong>在租約內列出詳細清單，並註明維修責任方，以避免爭議。這雖然不是《常規規例》的法定要求，但屬專業執業的最佳實踐。</li>
                        <li><strong>承按人同意：</strong>如物業有按揭，業主出租前通常需要取得<strong>承按銀行 (Mortgagee) 的書面同意</strong>。持牌人應提醒業主此點。</li>
                        <li><strong>語言版本：</strong>如租約有中英文版本，必須清楚說明以何版本為準（例如「如中英文版本有任何歧義，概以英文版本為準」）。</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
      </ExportableSection>

      {/* Topic 2: UBW */}
      <ExportableSection label="複製：違建專題">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-4">
            <AlertTriangle className="text-orange-600" /> 專題二：建築物合規與用途深度解析 (Building Compliance & Usage In-depth Analysis)
            </h3>
            <p className="text-sm text-slate-600 mb-6">此專題關乎物業的合法性與安全性，是地產代理履行盡職調查責任的核心，也是保障客戶利益、避免專業責任的關鍵環節。</p>
            
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-lg text-primary mb-2">一、核心法規依據 (Core Regulatory Basis)</h4>
                    <ul className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
                        <li><strong>《建築物條例》（Buildings Ordinance, Cap. 123）及其附屬規例：</strong>規管香港建築物的設計、建造、改建、安全及清拆等事宜。</li>
                        <li><strong>《地產代理常規（一般）規例》（Cap. 511C）：</strong>規範地產代理在提供物業資料時的準確性。</li>
                        <li><strong>《地產代理操守守則》（Code of Ethics）：</strong>要求地產代理秉持誠實、忠誠、謹慎和勤勉的態度。</li>
                        <li>地產代理監管局相關<strong>《執業通告》</strong>（如關於違例建築工程、非住宅物業的指引）。</li>
                        <li><strong>大廈公契 (Deed of Mutual Covenant, DMC)：</strong>作為規範物業使用和管理的私人契約。</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-primary mb-2">二、佔用許可證（「入伙紙」）的權威性 (Authority of Occupation Permit)</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                        <li><strong>定義：</strong>由建築事務監督 (Building Authority) 在樓宇落成後發出的法定文件，證明該建築物已按批准的圖則建成，並符合相關條例，可供占用。</li>
                        <li><strong>關鍵信息：</strong>
                            <ul className="list-[circle] pl-5 mt-1">
                                <li><strong>樓宇落成日期：</strong>用以確定樓齡。</li>
                                <li><strong>批准用途：</strong>明確指明每個單位在落成時的法定用途（如「住宅」、「辦公室」、「商店」、「工業」等）。這是判斷物業現有用途是否合法的最基本和最權威的依據。</li>
                            </ul>
                        </li>
                        <li><strong>持牌人責任：</strong>
                            <ul className="list-[circle] pl-5 mt-1">
                                <li>在提供物業的許可用途資料時，<strong>必須依據入伙紙</strong>或經批准的建築圖則。</li>
                                <li>必須清楚說明，該資料是入伙紙發出之日的狀況，並非保證物業<strong>現時或未來</strong>的用途完全合法。</li>
                                <li>必須告知客戶，政府批地條款（載於土地查冊的第一部分）和大廈公契可能載有<strong>額外的用途限制</strong>，這些限制可能比入伙紙更為嚴格。</li>
                                <li>必須建議客戶就其<strong>擬作的特定用途</strong>（如將住宅單位改作辦公室、將工業單位改作藝術工作室）尋求獨立的法律及/或專業意見，以確認其合法性。</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                        <AlertTriangle size={20} className="text-red-600"/> 
                        三、違例建築工程（僭建物）的高危風險與處理 (High Risks & Handling of Unauthorized Building Works - UBWs)
                    </h4>
                    <p className="text-sm text-slate-700 mb-4"><strong>定義：</strong>任何未經建築事務監督事先批准，而進行的樓宇加建或改動（如搭建閣仔/閣樓、圍封露台、更改結構牆、加建淋浴間、更改窗戶尺寸等）。</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <strong className="block text-primary mb-2">5大核心風險：</strong>
                            <ul className="space-y-3 text-sm text-slate-700">
                                <li className="flex gap-2">
                                    <FileWarning size={16} className="text-red-500 shrink-0 mt-1"/> 
                                    <span><strong>安全風險：</strong>違例建築工程可能影響樓宇結構穩定性、消防安全，甚至危及生命財產。</span>
                                </li>
                                <li className="flex gap-2">
                                    <FileWarning size={16} className="text-red-500 shrink-0 mt-1"/> 
                                    <span><strong>法律風險：</strong>建築事務監督可根據《建築物條例》第24或24C條發出<strong>清拆令 (Demolition Order) 或修葺令 (Repair Order)</strong>，要求業主必須遵從，所有費用由業主自負。若不遵從，業主可能面臨檢控、罰款，甚至政府代為執行工程後向業主追討費用並在物業上註冊<strong>「工程費用押記令」</strong>。</span>
                                </li>
                                <li className="flex gap-2">
                                    <FileWarning size={16} className="text-red-500 shrink-0 mt-1"/> 
                                    <span><strong>業權風險：</strong>嚴重的違例建築行為可能構成違反政府租契條款，政府理論上可行使權利收回土地（雖極少發生）。</span>
                                </li>
                                <li className="flex gap-2">
                                    <FileWarning size={16} className="text-red-500 shrink-0 mt-1"/> 
                                    <span><strong>財務風險：</strong>銀行在審批按揭時，可能因物業存在僭建而拒絕提供按揭或降低估價。</span>
                                </li>
                                <li className="flex gap-2">
                                    <FileWarning size={16} className="text-red-500 shrink-0 mt-1"/> 
                                    <span><strong>交易風險：</strong>買家可能因交付的物業與簽約時狀況不符（如僭建物被清拆）而拒絕成交，甚至提出訴訟。</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <strong className="block text-primary mb-3">持牌人專業行動指引（必須遵守）：</strong>
                            <ol className="list-decimal pl-5 text-sm space-y-3 text-slate-700">
                                <li><strong>進行土地查冊：</strong>仔細查閱土地登記冊（特別是第三部分）是否有<strong>清拆令、修葺令</strong>或其他相關政府命令的記錄，並檢查是否有「完成規定事項證明書」(Certificate of Compliance) 證明已遵從命令。</li>
                                <li><strong>審視入伙紙及平面圖則：</strong>對比物業現狀與入伙紙批准的圖則，或向業主索取經批准的建築圖則，留意是否有明顯不符的構築物。</li>
                                <li><strong>實地考察：</strong>在視察物業時，應留意是否有明顯的加建或改動，並與物業資料表格及已知信息核對。</li>
                                <li><strong>如實披露：</strong>如發現或合理懷疑存在僭建物，必須<strong>如實告知買賣/租賃雙方</strong>所有已知的事實和潛在風險。</li>
                                <li><strong>無法核實合法性：</strong>若入伙紙或批准圖則沒有顯示有關構築物（如閣樓、圍封露台），必須明確告知客戶<strong>無法核實其合法性</strong>。</li>
                                <li><strong>最高級別建議：</strong>必須清晰說明僭建物的潛在風險（包括法律、安全、財務及交易風險），並<strong>強烈建議客戶在交易前尋求獨立法律意見及其他相關專業意見</strong>（如建築師、測量師），以評估風險和責任。此建議應以<strong>書面形式</strong>提供。</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h4 className="font-bold text-lg text-primary mb-2">四、大廈公契的重要性 (Importance of Deed of Mutual Covenant - DMC)</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                        <li><strong>定義：</strong>由發展商、管理公司與首名買家訂立的具法律約束力的契約，規範整幢大廈的管理、公用部分的使用權、維修責任及費用分攤等。所有現任和未來業主均受其條款約束。</li>
                        <li><strong>對持牌人的意義：</strong>
                            <ul className="list-[circle] pl-5 mt-1">
                                <li>公契是了解物業<strong>管理費、管理模式、使用限制</strong>（如可否飼養寵物、是否允許作商業用途、對外牆或窗戶改動的限制）的重要文件。</li>
                                <li>持牌人應建議客戶查閱公契，了解其作為業主的權利與責任，確保其預期用途和生活方式與公契條款相符。</li>
                                <li><strong>公契的違反：</strong>如業主違反公契條款（例如擅自改動公用部分、拖欠管理費），可能導致業主立案法團或管理公司採取法律行動，甚至在物業上註冊押記。地產代理應提醒客戶留意並披露任何已知的公契違反。</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </ExportableSection>

      {/* Topic 3: First-hand */}
      <ExportableSection label="複製：一手樓專題">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-4">
            <Home className="text-primary" /> 專題三：一手住宅銷售深度解析 (In-depth Analysis of First-hand Residential Property Sales)
            </h3>
            <div className="bg-red-50 p-4 rounded border border-red-100 text-sm mb-6">
                <strong className="text-red-800">重要提示：</strong>一手住宅物業的銷售受<strong>《一手住宅物業銷售條例》（Residential Properties (First-hand Sales) Ordinance, Cap. 621）</strong>的嚴格規管。地產代理監管局亦發出多份專門通告（如通告編號13-04(CR)、24-01(CR)等）提供詳細指引。持牌人必須將合規置於最高優先級，因為違反條例可能導致<strong>刑事檢控</strong>。
            </div>

            <div className="space-y-6">
            {/* Section 1 added to be complete */}
            <div>
                <h4 className="font-bold text-lg text-primary mb-2">一、核心法規依據 (Core Regulatory Basis)</h4>
                <ul className="list-decimal pl-5 text-sm text-slate-700 space-y-2">
                    <li><strong>《一手住宅物業銷售條例》（第621章）：</strong>這是規管一手住宅物業銷售的最高準則，具有刑事效力。</li>
                    <li><strong>《地產代理條例》（第511章）及其附屬規例：</strong>提供地產代理的牌照制度和紀律處分框架。</li>
                    <li><strong>地產代理監管局相關《執業通告》：</strong>（特別是編號13-04(CR) – 銷售一手住宅物業的指引；24-01(CR) – 地產代理在住宅物業交易中提供優惠及收取佣金的良好競爭做法指引等）。</li>
                    <li><strong>《競爭條例》（Competition Ordinance, Cap. 619）：</strong>尤其涉及佣金及優惠安排，旨在防止合謀定價等反競爭行為。</li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-lg text-primary mb-2">二、關鍵合規要點剖析：面積表述的強制性規定</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                        <li><strong>唯一標準：</strong>在所有情況下，包括售樓說明書、價單、廣告及口頭陳述中，描述住宅物業的樓面面積和計算呎價時，<strong>必須且只能使用「實用面積」(Saleable Area)</strong>。</li>
                        <li><strong>「實用面積」的法律定義：</strong>指該住宅物業的樓面面積，包括以下組成部分：
                            <br/>- 該物業圍牆以內的面積（包括任何內部間隔及支柱的面積）。
                            <br/>- 露台（如有）及工作平台（如有）的面積的百分之五十。
                        </li>
                        <li><strong>不計入實用面積：</strong>空調機房、窗台、閣樓、花園、天台、庭院等特定設施的面積（須符合條例的詳細規定，例如窗台、閣樓、花園、天台等面積<strong>不計入實用面積</strong>，但須在售樓說明書中列明）。</li>
                        <li><strong>【刑事風險】：</strong>根據《一手住宅物業銷售條例》第38條，任何人發布或安排發布違反此規定的廣告，即屬犯罪，可處罰款及監禁。持牌人必須確保自己及所屬公司發出的所有宣傳材料完全合規。</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-primary mb-2">三、法定銷售文件的指引責任 (Guidance Responsibility)</h4>
                    <p className="text-sm text-slate-600 mb-2">持牌人不得自行擬備或分發標題為「售樓說明書」的刊物，此舉屬嚴重犯罪。正確的做法是：</p>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                        <li><strong>法定文件來源：</strong>所有銷售資料必須來自<strong>賣方（發展商）</strong>。法定文件包括：
                            <br/>- <strong>售樓說明書 (Sales Brochure)：</strong>賣方須在開售前最少<strong>7日</strong>公布。
                            <br/>- <strong>價單 (Price List)：</strong>賣方須在開售前最少<strong>3日</strong>公布。
                            <br/>- <strong>銷售安排 (Sales Arrangement)：</strong>賣方須在開售前最少<strong>3日</strong>公布。
                        </li>
                        <li><strong>持牌人核心責任：</strong>
                            <ul className="list-[circle] pl-5 mt-1">
                                <li><strong>指引客戶查閱：</strong>必須建議準買家查閱由賣方提供的<strong>最新版本</strong>的售樓說明書、價單及銷售安排。</li>
                                <li><strong>提供或告知途徑：</strong>
                                    <br/>- 如果持牌人從賣方處取得了這些文件，應在<strong>不收取費用、不設條件</strong>的情況下提供給準買家。
                                    <br/>- 如果未能提供，必須建議準買家前往賣方的銷售處索取，或到賣方指定的網站及由一手住宅物業銷售監管局設立的<strong>「一手住宅物業銷售資訊網」(SRPE)</strong> 查閱。
                                </li>
                                <li><strong>強調權威性：</strong>必須告知準買家，這些法定文件是最權威、最準確的信息來源，任何宣傳品均不能替代。</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t pt-6 space-y-6">
                <div>
                        <h4 className="font-bold text-lg text-primary mb-3">四、提供優惠的合規指引 (根據《執業通告》24-01(CR))</h4>
                        <p className="text-sm text-slate-600 mb-3">向準買家提供優惠（如現金回贈、贈品等）是常見的營銷手法，但必須嚴格遵守競爭法則及披露要求。</p>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div className="bg-slate-50 p-4 rounded border border-slate-200">
                                <strong className="block text-primary mb-2">基本原則與競爭條例 (Competition Ordinance)</strong>
                                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                    <li>提供優惠是地產代理公司的<strong>個別商業決定</strong>，並非必須。</li>
                                    <li>此決定<strong>絕不可與其他地產代理公司討論或協議</strong>，否則可能構成《競爭條例》下的合謀定價等嚴重反競爭行為。</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-4 rounded border border-slate-200">
                                <strong className="block text-primary mb-2">披露要求與內部監控</strong>
                                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                    <li><strong>書面及事前披露：</strong>必須在為買方提交購樓意向登記或訂立任何協議之前，以<strong>書面形式</strong>（建議使用指定的優惠書或信函）清楚告知買方優惠的所有詳情。</li>
                                    <li><strong>不得誤導：</strong>提供的優惠不得限制或妨礙買方全面考慮其購買決定（例如，試圖用高額回贈轉移買方對物業缺陷的注意力）。</li>
                                    <li><strong>內部監控：</strong>地產代理公司必須就提供優惠向員工發出清晰指引，並密切監督員工遵守情況。</li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div>
                        <h4 className="font-bold text-lg text-primary mb-3">五、收取佣金的良好競爭做法與銷售秩序</h4>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div className="bg-slate-50 p-4 rounded border border-slate-200">
                                <strong className="block text-primary mb-2">收取佣金的良好競爭做法 (根據《執業通告》24-01(CR))</strong>
                                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                    <li><strong>制定書面政策：</strong>地產代理公司應自行制定書面的佣金政策，考慮因素包括物業價值、交易複雜程度、員工資歷及服務範圍等。</li>
                                    <li><strong>事前書面披露：</strong>在訂立臨時買賣協議（或購樓意向登記）之前，必須向客戶（買方）提供信函，清晰列明：(a) 收取的佣金金額或費率；(b) 將履行的特定工作及服務；(c) 所提供服務的期限；(d) 促成交易的持牌員工及其主管的姓名。</li>
                                    <li><strong>員工培訓：</strong>公司必須就佣金政策向員工提供清晰指引和足夠培訓。</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-4 rounded border border-slate-200">
                                <strong className="block text-primary mb-2">銷售點秩序管理（根據《執業通告》18-03(CR)）</strong>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                    <li><strong>委任總樓盤監督：</strong>地產代理公司必須為每個一手樓盤銷售點委任一名<strong>總樓盤監督 (Overall Site Supervisor)</strong>，該人員須符合嚴格資質（例如持牌最少十年、無近期紀律處分記錄等）。</li>
                                    <li><strong>提前報備：</strong>在銷售開始前最少一天，須向監管局提供被調派員工的名單、指揮系統圖表及內部秩序政策。</li>
                                    <li><strong>禁止非持牌員工：</strong>嚴禁調派非持牌員工到銷售點進行任何形式的推廣活動。</li>
                                    <li><strong>行為規範：</strong>員工必須佩戴職員證，不得在公共地方（如地鐵站出入口、行人路）招攬生意、不得截車、不得阻礙公眾地方、不得過分推銷或發生衝突。</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 text-lg mb-3 flex items-center gap-2"><ShieldCheck size={20}/> 六、禁止的行為 (Prohibited Actions)</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-red-800">
                    <li><strong>不得提前探求購樓意向：</strong>在相關的價單可供公眾查閱之前，或在物業被要約出售之前，持牌人<strong>不得探求或接受任何形式的購樓意向</strong>（無論有或沒有明確選擇，即俗稱的「無票」或「收票」）。</li>
                    <li><strong>禁止持牌人貸款：</strong>嚴禁向準買家提供或提出提供貸款，即使買家表示資金不足。這屬於《放債人條例》的規管範圍。</li>
                    <li><strong>禁止簽署要項漏空的合約：</strong>同二手交易，嚴禁安排客戶簽署任何要項漏空的臨時買賣合約。</li>
                    <li><strong>禁止虛假或具誤導性陳述：</strong>包括對物業景觀、配套、升值潛力等方面的誇大或不實描述。</li>
                </ul>
            </div>
        </div>
      </ExportableSection>
    </section>
  );
};