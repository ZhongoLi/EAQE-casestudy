import React from 'react';
import { SectionHeader, LawCard } from '../components/UI';
import { ExportableSection } from '../components/ExportableSection';
import { Scale, ShieldAlert } from 'lucide-react';

export const Part2Principles: React.FC = () => {
  return (
    <section id="part2-principles" className="space-y-12">
      <SectionHeader 
        title="第二部分 Part 1：核心原則與思維框架" 
        subtitle="案例題考點精講 - 三大核心原則"
        icon={<Scale size={32} />}
      />

      {/* Principle 1 */}
      <ExportableSection label="複製：受信責任">
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-primary">
            <div className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-2">原則一：受信責任——最高的專業忠誠義務 (Fiduciary Duty)</h3>
            
            <div className="space-y-6 mt-6">
                <div>
                <h4 className="font-bold text-lg text-primary-dark mb-2">1. 核心內涵 (Core Essence)</h4>
                <p className="text-slate-700 leading-relaxed">
                    受信責任（Fiduciary Duty），在香港法律中亦常稱為信託責任或信義義務，是代理法中的核心原則。它指處於受信地位的一方（地產代理）對另一方（客戶）所負有的<strong>最高標準的誠信、忠誠、謹慎和勤勉</strong>的義務。其本質是<strong>客戶利益至上</strong>原則，要求代理人必須將客戶的利益置於自身或任何第三方的利益之上。
                </p>
                </div>

                <LawCard title="2. 法律與規例依據 (Legal and Regulatory Basis)">
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>普通法 (Common Law)：</strong>受信責任源於普通法中的衡平法原則，由香港法院的判例確立和發展，是代理關係的基石。</li>
                    <li><strong>《地產代理條例》(Estate Agents Ordinance, Cap. 511)：</strong>
                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                        <li>此條例確立了地產代理行業的監管框架，並賦予地產代理監管局（EAA）權力，制定附屬規例及《操守守則》，以確保地產代理以專業和誠實的方式行事。</li>
                        <li>雖然條例本身沒有逐條列明受信責任的全部內容，但其紀律處分機制（第28條）及牌照發出和續期時對「適當人選」(Fit and Proper Person) 的要求（第12(1)(a)條），均體現了對違反受信責任行為的懲處和對行業專業標準的維護。</li>
                    </ul>
                    </li>
                    <li><strong>《地產代理常規（一般）規例》(Estate Agents Practice (General) Regulation, Cap. 511C)：</strong>
                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                        <li>作為《地產代理條例》的附屬法例，該規例將普通法下的一些受信責任義務具體化為法定要求，例如關於<strong>披露個人利益</strong>（第11條）和<strong>雙邊代理須獲書面同意</strong>（第10條）等。</li>
                    </ul>
                    </li>
                    <li><strong>《地產代理操守守則》(Code of Ethics)：</strong>
                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                        <li>《操守守則》第3.3.1段（作為專業人員的行為）明確要求：「地產代理和營業員在經營過程中，必須秉持<strong>誠實、忠誠和嚴正的態度</strong>向客戶提供服務，並保障客戶不因欺詐、失實陳述或不合專業操守的行為而受損。」</li>
                        <li>《操守守則》第3.4.1段（保障客戶利益）進一步規定：「作為代理或受委託為代理的地產代理和營業員，應<strong>保障和促進客戶的利益</strong>、按照地產代理協議執行客戶的指示，並對交易各方公平公正。」</li>
                        <li>《操守守則》第3.1.1段亦要求地產代理和營業員在執業時必須避免從事可能觸犯法律的活動，這也是受信責任的延伸。</li>
                    </ul>
                    </li>
                </ul>
                </LawCard>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold text-lg text-primary-dark mb-4">3. 具體行為準則（案例分析的關鍵判斷標準）</h4>
                <p className="mb-4 text-sm text-slate-600">受信責任體現為以下多項具體義務，這些義務是判斷代理行為是否合乎專業操守的關鍵：</p>
                
                <ul className="space-y-4">
                    <li>
                    <strong className="text-primary block mb-1">忠誠義務 (Duty of Loyalty)：</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                        <li><strong>禁止利益衝突 (Prohibition of Conflict of Interest)：</strong>代理不得使其個人利益或任何第三方的利益，與其對客戶的責任相衝突。例如，代理不得購買客戶的物業，除非已向客戶作<strong>全面披露所有相關事實</strong>，並獲得客戶<strong>知情且書面同意</strong>。</li>
                        <li><strong>不得謀取秘密利潤 (No Secret Profits)：</strong>代理不得利用其受信地位、源於客戶的信息，或在代理過程中獲取的任何機會，為自己謀取任何未向客戶披露和同意的利益（例如收取未經客戶同意的回佣或額外費用）。</li>
                    </ul>
                    </li>
                    <li>
                    <strong className="text-primary block mb-1">信息披露 (Duty of Disclosure)：</strong>
                    <span className="text-sm text-slate-700">必須向客戶披露所有可能影響其決策的重大信息，包括但不限於：</span>
                    <ul className="list-[square] pl-5 text-sm text-slate-700 space-y-1 mt-1">
                        <li><strong>雙邊代理關係：</strong>根據《地產代理常規（一般）規例》第10條，若在同一項物業交易中同時代表買賣雙方（即雙邊代理），必須向雙方清晰披露此關係，並獲得雙方<strong>書面同意</strong>。</li>
                        <li><strong>實益權益：</strong>根據《地產代理常規（一般）規例》第11條及附表的《地產代理協議》要求，代理必須披露本人、指明親屬（配偶、父母、子女、兄弟姊妹）或相關公司對該物業擁有的任何金錢或其他實益權益。</li>
                        <li><strong>佣金或優惠：</strong>披露從交易中獲得的全部佣金、回贈或任何形式的利益（例如從律師、銀行或其他服務供應商處獲得的轉介費），並獲得客戶同意。</li>
                    </ul>
                    </li>
                    <li>
                    <strong className="text-primary block mb-1">保密義務 (Duty of Confidentiality)：</strong>
                    <p className="text-sm text-slate-700">未經客戶明確同意或法律允許，代理不得洩露或利用在執業過程中獲知的客戶機密信息。這些信息可能包括客戶的財務狀況、購買或出售意圖、家庭情況、最低可接受價格或最高可支付價格等。</p>
                    </li>
                    <li>
                    <strong className="text-primary block mb-1">謹慎和勤勉義務 (Duty of Care and Diligence)：</strong>
                    <p className="text-sm text-slate-700">代理必須以合理謹慎和勤勉的態度行事，為客戶提供專業服務。這包括進行必要的物業查證（如查閱物業資料、了解是否有建築令等）、提供準確的物業信息、避免疏忽導致客戶損失。</p>
                    </li>
                    <li>
                    <strong className="text-primary block mb-1">遵守合法指示義務 (Duty to Obey Lawful Instructions)：</strong>
                    <p className="text-sm text-slate-700">代理必須按照客戶的合法指示行事，除非這些指示違反法律或專業操守（例如要求代理進行非法活動）。</p>
                    </li>
                </ul>
                </div>

                <div className="border-t pt-4">
                <h4 className="font-bold text-lg text-primary-dark mb-2">4. 案例應用思維 (Case Application Mindset)</h4>
                <p className="text-slate-700 text-sm mb-3"><strong>核心自省：</strong>在處理任何交易或作出任何決定時，地產代理應首先自問：「我的這一行為或決定，是否完全是為了客戶的最佳利益？是否存在任何未披露的個人利益或潛在衝突？」</p>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <h5 className="font-bold text-red-800 flex items-center gap-2 mb-2"><ShieldAlert size={18}/> 典型錯誤</h5>
                    <ul className="list-disc pl-5 text-sm text-red-700 space-y-1">
                    <li>為了促成交易、儘快獲取佣金，而未能充分披露物業的缺陷、潛在風險（如僭建、未註冊的租約、訴訟待決登記）或任何可能影響客戶決策的<strong>重大信息 (Material Information)</strong>。</li>
                    <li>為自己或相關方謀取未經客戶同意的秘密利潤或不正當利益。</li>
                    <li>在未獲客戶知情且書面同意的情況下，同時代表買賣雙方，或未能充分披露其雙邊代理身份。</li>
                    <li>未能以合理的謹慎和勤勉態度行事，導致客戶損失（例如未能妥善查核物業資料，或對重要查詢未作跟進）。</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
      </ExportableSection>

      {/* Principle 2 */}
      <ExportableSection label="複製：盡職調查">
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-primary">
            <div className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-2">原則二：盡職調查——專業的勤勉標準 (Due Diligence)</h3>
            
            <div className="space-y-6 mt-6">
                <div>
                <h4 className="font-bold text-lg text-primary-dark mb-2">1. 核心內涵 (Core Essence)</h4>
                <p className="text-slate-700 leading-relaxed">
                    地產代理不能僅僅是一個「信息傳遞者」。法律要求地產代理採取<strong>積極、合理且勤勉的步驟</strong>，去核實信息、識別潛在風險，並確保提供給客戶的建議和物業資料是建立在<strong>準確和充分的信息基礎</strong>之上。這是一種「應盡一切應盡的努力」的積極責任，旨在保障客戶的利益，避免因疏忽而導致客戶遭受損失。
                </p>
                </div>

                <LawCard title="2. 法律與規例依據 (Legal and Regulatory Basis)">
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>《地產代理操守守則》(Code of Ethics)：</strong>第3.5.1段（提供服務時的謹慎和勤勉）明確指出：「地產代理和營業員在履行職務時必須<strong>盡量小心和盡一切應盡的努力</strong>。」</li>
                    <li><strong>《地產代理條例》(Estate Agents Ordinance, Cap. 511)：</strong>第36(1)(a)(ii)條賦予地產代理監管局制定規例，要求持牌人須在合理範圍內確保自己能信納物業的<strong>訂明資料</strong>的準確性。</li>
                    <li><strong>《地產代理常規（一般）規例》(Estate Agents Practice (General) Regulation, Cap. 511C)：</strong>
                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                        <li>第3(3)條明確規定：「持牌地產代理在提供任何<strong>訂明表格</strong>（例如物業資料表格或出租資料表格）時，應在切實可行的範圍內盡快取得該表格列明的資料，及<strong>確保該等資料及表格內其他資料的準確性</strong>。」</li>
                        <li>第3(4)條進一步要求，持牌地產代理在提供訂明表格時，必須向其客戶解釋表格的內容。</li>
                        <li>第7條（廣告）亦要求廣告內容必須準確，不得虛假或具誤導性，這亦是盡職調查的體現。</li>
                    </ul>
                    </li>
                </ul>
                </LawCard>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold text-lg text-primary-dark mb-4">3. 具體行為準則（「核實」而非「聽信」）</h4>
                <p className="mb-4 text-sm text-slate-600">盡職調查要求代理對關鍵信息進行獨立核實，而非僅僅轉述：</p>
                
                <div className="space-y-4">
                    <div>
                    <strong className="text-primary block mb-1">信息的訂明來源 (Prescribed Sources of Information)：</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                        <li><strong>物業面積、樓齡、許可用途：</strong>必須依據差餉物業估價署的記錄、佔用許可證（「入伙紙」）、經批准的建築圖則、或相關政府部門的官方文件，而非僅憑業主口頭陳述或過往的廣告資料。</li>
                        <li><strong>業權與產權負擔：</strong>必須進行<strong>土地查冊 (Land Search)</strong>，並仔細解讀查冊結果（如按揭、押記令、建築命令、清拆令、訴訟待決登記、地役權、大廈公契的註冊等），而非僅提供查冊文件。代理應向客戶解釋查冊結果的<strong>主要含義</strong>。</li>
                        <li><strong>賣方身份：</strong>必須核對賣方身份證明文件與土地註冊處記錄的<strong>業主姓名</strong>是否一致。如有疑問（例如身份證號碼不符或姓氏有變），需進一步核實（如要求提供最近的物業稅單、結婚證書、改名契等）。</li>
                        <li><strong>其他資料：</strong>例如管理費、差餉、地租等費用，應向管理公司、差餉物業估價署或地政總署核實。</li>
                    </ul>
                    </div>
                    
                    <div className="border-t pt-3">
                    <strong className="text-primary block mb-1">風險提示與轉介 (Risk Alert and Referral)：</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                        <li>當遇到超出其專業範圍或無法自行核實的問題時（如複雜的法律問題、僭建物的合法性、稅務影響、物業結構安全、測量問題等），盡職調查的責任要求代理必須<strong>建議客戶尋求獨立的法律、測量、會計或其他相關專業意見</strong>。這不僅是保護客戶，也是保護代理人自身免受潛在訴訟。</li>
                        <li>代理應以<strong>書面形式</strong>作出此類建議，以作紀錄。</li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className="border-t pt-4">
                <h4 className="font-bold text-lg text-primary-dark mb-2">4. 案例應用思維 (Case Application Mindset)</h4>
                <p className="text-slate-700 text-sm mb-3">
                    <strong>思維路徑：</strong>「這個信息/說法，我是否進行了<strong>獨立核實</strong>？核實的來源是否<strong>權威和可靠</strong>（例如政府官方文件、土地註冊處記錄）？是否存在我作為代理人無法專業判斷或核實的風險（例如法律、結構、稅務問題），需要提示客戶並<strong>建議其尋求進一步專業意見</strong>？」
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <h5 className="font-bold text-red-800 flex items-center gap-2 mb-2"><ShieldAlert size={18}/> 典型錯誤</h5>
                    <ul className="list-disc pl-5 text-sm text-red-700 space-y-1">
                    <li>將業主提供的「建築面積」或「實用面積」直接告知買家而未核實其來源或準確性。</li>
                    <li>發現物業有疑似僭建物，僅口頭告知「應該沒問題」或「很多人都是這樣」，而未書面建議客戶諮詢律師或測量師。</li>
                    <li>未能提醒客戶進行土地查冊，或未能解釋查冊結果中關鍵的產權負擔。</li>
                    <li>未能核對賣方身份，導致交易延誤或出現詐騙風險。</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
      </ExportableSection>

      {/* Principle 3 */}
      <ExportableSection label="複製：避免失實">
        <div className="bg-white rounded-xl shadow-lg border-t-4 border-primary">
            <div className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-2">原則三：避免失實陳述——專業的真實性底線 (Avoid Misrepresentation)</h3>
            
            <div className="space-y-6 mt-6">
                <div>
                <h4 className="font-bold text-lg text-primary-dark mb-2">1. 核心內涵 (Core Essence)</h4>
                <p className="text-slate-700 leading-relaxed">
                    地產代理禁止在要項上作出虛假或具誤導性的陳述。無論是<strong>故意欺騙</strong>（欺詐性失實陳述）、<strong>疏忽大意</strong>（疏忽的失實陳述），抑或<strong>無過失</strong>（無辜失實陳述），代理人均可能需承擔法律責任。「在要項上」(materially) 指該陳述足以影響一個合理客戶作出交易的決定。這要求代理人不僅要確保其積極陳述的真實性，還需避免因隱瞞重大事實而造成誤導。
                </p>
                </div>

                <LawCard title="2. 法律與規例依據 (Legal and Regulatory Basis)">
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>《失實陳述條例》(Misrepresentation Ordinance, Cap. 284)：</strong>這條例規定了失實陳述的民事法律責任，包括損害賠償和撤銷合約的權利。</li>
                    <li><strong>《地產代理操守守則》(Code of Ethics)：</strong>
                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                        <li>第3.3.1段（作為專業人員的行為）要求：「地產代理和營業員在經營過程中，必須秉持<strong>誠實、忠誠和嚴正的態度</strong>向客戶提供服務，並保障客戶不因欺詐、失實陳述或不合專業操守的行為而受損。」</li>
                        <li>第3.4.1段（保障客戶利益）要求代理應保障和促進客戶的利益，這包含提供準確資訊的義務。</li>
                    </ul>
                    </li>
                    <li><strong>《地產代理常規（一般）規例》(Estate Agents Practice (General) Regulation, Cap. 511C)：</strong>
                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                        <li>第7(1)條：「持牌地產代理不得安排或准許發出任何全部或部分與其地產代理業務有關並載有<strong>在要項上屬虛假或具誤導性陳述或詳情的廣告</strong>。」</li>
                        <li>第7(2)條（補充）：廣告中的圖片必須真實反映物業現狀。</li>
                        <li>第11(a)條：「持牌人不得安排或准許任何人聲稱有買方的要約存在，除非該項要約確實存在。」（此條文主要針對虛假要約，以誘使其他買家出價。）</li>
                        <li>第11(b)條（補充）：持牌人不得聲稱已收到任何訂金或部分訂金，除非該訂金或部分訂金確實已收到。</li>
                    </ul>
                    </li>
                    <li><strong>《一手住宅物業銷售條例》(Residential Properties (First-hand Sales) Ordinance, Cap. 621)：</strong>
                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                        <li>該條例對一手住宅物業銷售的宣傳資料、售樓說明書、價單等信息的準確性有極其嚴格的規定，任何虛假或具誤導性陳述均可構成嚴重違法行為。</li>
                    </ul>
                    </li>
                </ul>
                </LawCard>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold text-lg text-primary-dark mb-4">3. 具體行為準則（明示與默示）</h4>
                <p className="mb-4 text-sm text-slate-600">失實陳述可分為明示（主動陳述）和默示（隱瞞或不作為）兩種：</p>
                
                <div className="space-y-4">
                    <div>
                    <strong className="text-primary block mb-1">主動陳述必須真實 (Active Statements Must Be True)：</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                        <li>關於物業價格、面積（包括實用面積與建築面積的正確定義及來源）、樓齡、業權、用途、租約條款、物業狀況（如滲漏水、結構問題）等<strong>事實性信息</strong>，必須準確無誤，並應有可靠來源支持（參見「盡職調查」原則）。</li>
                        <li><strong>《一手住宅物業銷售條例》</strong>對一手物業的面積、平面圖、預計完工日期等資訊的準確性有嚴格要求。</li>
                    </ul>
                    </div>
                    
                    <div className="border-t pt-3">
                    <strong className="text-primary block mb-1">不得隱瞞重大事實 (No Concealment of Material Facts)：</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                        <li>沉默也可能構成誤導性失實陳述，尤其當代理人有披露義務時。例如，明知物業是<strong>「凶宅」（非自然死亡事件）、有嚴重滲漏歷史</strong>、存在未經解除的政府命令（如清拆令、修葺令）、或有潛在的土地用途限制等重大不利因素，但客戶未主動問起就不提，也屬於違規行為。</li>
                        <li>代理應主動披露所有其知悉且合理客戶會認為重要的信息。</li>
                    </ul>
                    </div>

                    <div className="border-t pt-3">
                    <strong className="text-primary block mb-1">廣告與宣傳品是重災區：</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                        <li>根據《常規規例》第7條，廣告不得使用虛假圖片、誇大物業優點（如「無敵海景」實為側海景）、誇大投資回報、或隱瞞不利因素（如鄰近垃圾站、大型建築工程、噪音污染源）。</li>
                        <li>廣告中的物業描述、價格、面積等必須準確，並應註明牌照號碼。</li>
                    </ul>
                    </div>

                    <div className="border-t pt-3">
                    <strong className="text-primary block mb-1">對推測性陳述負責 (Accountability for Speculative Statements)：</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                        <li>即使是對未來情況的預測（如「租金回報可達5%」、「升值潛力巨大」），也必須有<strong>合理的事實基礎支持</strong>。如果沒有合理基礎而作出此類陳述，或陳述方式具誤導性，則可能構成失實陳述。</li>
                        <li>代理應明確區分事實與意見，並提醒客戶投資有風險。</li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className="border-t pt-4">
                <h4 className="font-bold text-lg text-primary-dark mb-2">4. 案例應用思維 (Case Application Mindset)</h4>
                <p className="text-slate-700 text-sm mb-3">
                    <strong>自審陳述：</strong>「我所說的每一句話、文件中的每一個字，是否有<strong>事實依據</strong>？這個事實依據是否<strong>可靠和最新</strong>？我的陳述是否可能引導客戶產生<strong>錯誤的理解或期望</strong>？是否有任何我已知但未披露的<strong>重大不利信息</strong>？」
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <h5 className="font-bold text-red-800 flex items-center gap-2 mb-2"><ShieldAlert size={18}/> 典型錯誤</h5>
                    <ul className="list-disc pl-5 text-sm text-red-700 space-y-1">
                    <li>為吸引買家，在廣告中張貼經美化、過時或<strong>非該單位/物業的照片</strong>。</li>
                    <li>口頭承諾「一定能獲批九成按揭」，而未考慮買家財務狀況或物業估價。</li>
                    <li>未經核實，直接轉述業主關於物業「沒有僭建」的陳述，而未建議買家諮詢專業意見或進行獨立查核。</li>
                    <li>隱瞞物業曾發生非自然死亡事件（即「凶宅」），即使買家未主動詢問。</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
      </ExportableSection>
    </section>
  );
};