import React from 'react';
import { SectionHeader, List, InfoCard, ExamPoint } from '../components/UI';
import { ExportableSection } from '../components/ExportableSection';
import { ClipboardList, Megaphone, Handshake, PenTool, Search, AlertTriangle, FileText, CheckCircle } from 'lucide-react';

const Stage: React.FC<{ number: string; title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ number, title, icon, children }) => (
  <div className="relative pl-8 md:pl-12 py-8 border-l-2 border-slate-200 last:border-0">
    <div className="absolute -left-4 md:-left-5 top-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg z-10 border-4 border-slate-50">
      {number}
    </div>
    <ExportableSection label={`複製：階段${number}`}>
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="text-primary-light">{icon}</div>
            <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        {children}
        </div>
    </ExportableSection>
  </div>
);

export const Part2Process: React.FC = () => {
  return (
    <section id="part2-process" className="space-y-10">
      <SectionHeader 
        title="第二部分 Part 2：交易全流程合規要點與案例解析" 
        subtitle="五大階段：核心考點、常見陷阱與題眼關鍵詞"
      />

      <div className="ml-2">
        {/* Stage 1 */}
        <Stage number="1" title="階段一：接獲委託與訂立代理協議 (Stage 1: Receiving Instructions & Entering into Agency Agreement)" icon={<ClipboardList size={28}/>}>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                <strong className="text-primary block mb-2">核心目標</strong>
                <p className="text-sm text-slate-700">明確代理關係，奠定合規基礎，保障客戶及代理雙方權益。</p>
            </div>

            <div>
                <strong className="text-lg text-primary block mb-2">1. 關鍵法規與文件 (Key Regulations & Documents)</strong>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                    <li><strong>核心法規：</strong>《地產代理常規（一般）規例》(Estate Agents Practice (General) Regulation, Cap. 511C) 第3、5、6、10及11條。</li>
                    <li><strong>核心文件：</strong>訂明地產代理協議（Prescribed Estate Agency Agreement，即表格3-6）。這是界定代理與客戶之間權利、義務和責任的法律基礎。</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg text-primary mb-3">2. 核心考點精講 (Key Exam Points)</h4>
                
                <div className="space-y-4">
                    <div>
                        <h5 className="text-sm md:text-base font-bold text-primary-dark mb-2">考點1：強制訂立協議的時間點（《常規規例》第6條）</h5>
                        <p className="text-sm text-slate-600 mb-2">地產代理必須在<strong>最早發生</strong>的以下時間點，與客戶訂立訂明地產代理協議：</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded border">
                            <div>
                                <strong className="text-primary block">為賣方/業主行事 (Acting for Vendor/Landlord)：</strong>
                                <ul className="list-decimal pl-5 mt-1 space-y-1">
                                    <li>接受放盤委託後7個工作天內。</li>
                                    <li>為物業作廣告宣傳之前。</li>
                                    <li>安排簽署臨時買賣合約/租約之前。</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-primary block">為買方/租客行事 (Acting for Purchaser/Tenant)：</strong>
                                <ul className="list-decimal pl-5 mt-1 space-y-1">
                                    <li>安排客戶視察物業之前。</li>
                                    <li>安排簽署臨時買賣合約/租約之前。</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-xs text-red-600 mt-2 font-bold bg-red-50 p-2 rounded">案例意義：絕不能先開始實質性工作（如帶客看樓、登廣告、轉達要約）後再補簽協議。這是程序性違規的重災區。</p>
                    </div>

                    <div>
                        <h5 className="text-sm md:text-base font-bold text-primary-dark mb-2">考點2：協議內容的完整性與披露（《常規規例》第5條及附表，表格3-6）</h5>
                        <p className="text-sm text-slate-600 mb-2">地產代理協議必須包含以下關鍵內容，並清晰披露：</p>
                        <List items={[
                          "<strong>身份聲明 (Declaration of Agency Status)：</strong>必須清晰說明代理是 (i)只代表賣方/業主（單邊代理）；(ii)只代表買方/租客（單邊代理）；或(iii)同時代表買賣雙方/業主與租客（雙邊代理）。如屬雙邊代理，必須根據《常規規例》第10條，<strong>獲得雙方客戶的知情且書面同意</strong>。",
                          "<strong>物業資料 (Property Particulars)：</strong>必須填寫物業地址、地段號碼、及物業的叫價/叫租（即賣方/業主指示的價格或租金）。",
                          "<strong>獨家代理/非獨家代理 (Exclusive vs. Non-exclusive Agency)：</strong>必須清晰列明代理協議是<strong>獨家代理還是非獨家代理</strong>，因為這直接影響佣金的支付條件。",
                          "<strong>利益披露 (Disclosure of Interest)：</strong>根據《常規規例》第11條，代理必須在協議中披露本人、其指明親屬（配偶、父母、子女、兄弟姊妹）或相關公司對該物業是否擁有任何金錢或其他實益權益。這是受信責任的直接體現。",
                          "<strong>佣金條款 (Commission Terms)：</strong>必須明確列明佣金數額、計算方式（如樓價或租金的百分比、固定金額）和支付時間（如簽署臨時合約時/交易完成時）。避免使用模糊用詞。",
                          "<strong>有效期 (Validity Period)：</strong>必須填寫協議的生效日期和屆滿日期。",
                          "<strong>終止通知期 (Termination Notice Period)：</strong>協議通常會訂明任何一方終止協議所需的通知期。",
                          "<strong>其他重要提示：</strong>協議中亦包含多項重要提示，例如建議客戶尋求法律意見、進行土地查冊、查閱物業資料表格等，代理有責任向客戶解釋。"
                        ]} />
                    </div>

                    <div>
                        <h5 className="text-sm md:text-base font-bold text-primary-dark mb-2">考點3：對無律師代表客戶的解釋責任（《常規規例》第6(3)條）</h5>
                        <p className="text-sm text-slate-600 mb-2">如果客戶沒有律師代表，持牌人必須在客戶簽署協議前：</p>
                        <ol className="list-decimal pl-5 text-sm space-y-1 text-slate-700">
                            <li>向客戶詳細解釋協議中的每一項條款，特別是不同代理模式（單邊/雙邊）的含義及其對客戶權利和義務的影響。</li>
                            <li>採取合理步驟確保客戶明白其權利和義務。</li>
                            <li>如客戶表示不理解，<strong>必須建議其尋求獨立法律意見</strong>。</li>
                        </ol>
                        <p className="text-xs mt-2 text-slate-500">案例意義：不能簡單地把表格遞給客戶簽字了事。地產代理必須履行<strong>積極的告知和解釋義務</strong>，確保客戶是在充分理解的情況下簽署協議。</p>
                    </div>
                </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h4 className="text-red-800 font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle size={18} /> 3. 常見陷阱與案例題眼 (Common Traps & Exam Clues)
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-red-700 text-sm">
                    <li><strong>陷阱1：</strong>先刊登廣告或帶客視察物業，後補簽代理協議。</li>
                    <li><strong>陷阱2：</strong>隱瞞雙邊代理身份，或未清晰披露代理人或其親屬對物業的實益權益。</li>
                    <li><strong>陷阱3：</strong>對年長、教育程度較低或看似不懂行的客戶，未盡充分解釋義務，導致客戶對協議內容（特別是佣金或代理模式）不理解。</li>
                    <li><strong>陷阱4：</strong>未在協議中明確列明佣金數額或獨家代理條款。</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-red-200 text-xs font-bold text-red-800">
                    題眼關鍵詞：「未訂立代理協議即安排看樓/刊登廣告」、「未披露同時代表買賣雙方」、「客戶表示不明白但代理仍讓其簽署」、「協議未列明獨家代理條款」。
                </div>
            </div>
          </div>
        </Stage>

        {/* Stage 2 */}
        <Stage number="2" title="階段二：物業推廣與廣告宣傳 (Stage 2: Property Promotion & Advertising)" icon={<Megaphone size={28}/>}>
           <div className="space-y-6">
             <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                <strong className="text-primary block mb-2">核心目標</strong>
                <p className="text-sm text-slate-700">真實、準確地推廣物業，避免任何形式的誤導。</p>
             </div>

             <div>
                <strong className="text-lg text-primary block mb-2">1. 關鍵法規與文件 (Key Regulations & Documents)</strong>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                    <li><strong>核心法規：</strong>《地產代理常規（一般）規例》(Cap. 511C) 第7條（廣告）、第9條（不得在廣告內聲稱有要約或訂金）；《地產代理條例》(Cap. 511) 第14(1)(b)、(c)條（發牌規例中關於廣告的標識要求）；《一手住宅物業銷售條例》(Cap. 621)（如適用）。</li>
                    <li><strong>核心文件：</strong>任何形式的廣告（包括報紙、雜誌、網站、傳單、櫥窗廣告等）、價單（一手住宅物業）。</li>
                </ul>
            </div>

            <div>
                 <h4 className="font-bold text-lg text-primary mb-3">2. 核心考點精講 (Key Exam Points)</h4>
                 
                 <div className="space-y-4">
                    <ExamPoint number={1} title="賣方書面同意（《常規規例》第7(3)條）">
                        <List items={[
                            "在發出任何形式的物業廣告前，必須獲得賣方/業主的<strong>明確書面同意</strong>。口頭同意是不足夠的。",
                            "廣告內容（尤其是放盤價格）必須與賣方/業主的指示<strong>完全一致</strong>。"
                        ]} />
                    </ExamPoint>

                    <ExamPoint number={2} title="廣告內容的真實性（《常規規例》第7(1), (2), (4)條及《一手住宅物業銷售條例》）">
                        <List items={[
                            "<strong>禁止失實陳述：</strong>廣告不得包含在要項上屬虛假或具誤導性的陳述或詳情。",
                            "<strong>面積表述（極其重要！）：</strong><br/><ul class='list-[circle] pl-5 mt-1 text-slate-600'><li><strong>二手住宅物業：</strong>如果實用面積可從差餉物業估價署的記錄或首次轉讓的買賣協議中取得，廣告中<strong>必須提供實用面積</strong>。可同時提供建築面積，但實用面積的字體不能比建築面積的字體更小，且必須註明兩種面積的定義。</li><li><strong>一手住宅物業：</strong>根據《一手住宅物業銷售條例》，必須且只能使用<strong>實用面積</strong>進行宣傳和計算呎價。</li></ul>",
                            "<strong>價格真實性：</strong>不得以低於賣方指示的「吸引價」作廣告，以誘使買家查詢（即<strong>「誘餌式廣告」</strong>是禁止的）。廣告中的價格必須是賣方真實的放盤價。",
                            "<strong>圖片真實性：</strong>根據《常規規例》第7(2)條，廣告中使用的圖片必須<strong>真實反映該物業的現狀</strong>，不能使用效果圖、電腦合成圖、或同類單位照片進行誤導。",
                            "<strong>重大不利因素披露：</strong>不應隱瞞或遺漏可能影響客戶決策的重大不利因素（如物業為「凶宅」、有嚴重滲漏、存在未獲解除的政府命令等）。"
                        ]} />
                    </ExamPoint>

                    <ExamPoint number={3} title="廣告標識（《地產代理條例（發牌）規例》第14(1)(b)、(c)條）">
                        <p className="text-sm text-slate-700 mb-1">所有廣告必須清晰顯示以下資料：</p>
                        <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
                            <li>代理的<strong>牌照號碼</strong>或營業詳情說明書號碼。</li>
                            <li>代理的<strong>商號名稱</strong>。</li>
                            <li>物業的獨特編號及廣告發出日期（以便監管局追溯）。</li>
                        </ol>
                    </ExamPoint>
                 </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h4 className="text-red-800 font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle size={18} /> 3. 常見陷阱與案例題眼 (Common Traps & Exam Clues)
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-red-700 text-sm">
                    <li><strong>陷阱1：</strong>為吸引查詢，擅自以低於賣方放盤價的價格刊登廣告。</li>
                    <li><strong>陷阱2：</strong>誇大物業面積（尤其一手物業使用建築面積），或使用「無敵海景」、「豪華裝修」等無法客觀核實的主觀描述。</li>
                    <li><strong>陷阱3：</strong>隱瞞物業是「凶宅」或存在嚴重維修問題等重大不利因素。</li>
                    <li><strong>陷阱4：</strong>在廣告中使用非該物業的圖片，或經過度美化的圖片以造成誤導。</li>
                    <li><strong>陷阱5：</strong>廣告中未能清晰顯示牌照號碼或商號名稱。</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-red-200 text-xs font-bold text-red-800">
                    題眼關鍵詞：「廣告價格低於放盤價」、「廣告中僅列出建築面積/錯誤的面積」、「使用非該物業的照片」、「廣告未獲賣方書面同意」。
                </div>
            </div>
           </div>
        </Stage>

        {/* Stage 3 */}
        <Stage number="3" title="階段三：要約協商與物業視察 (Stage 3: Offer Negotiation & Property Inspection)" icon={<Search size={28}/>}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                <strong className="text-primary block mb-2">核心目標</strong>
                <p className="text-sm text-slate-700">公平、公正地處理所有要約，確保客戶對物業狀況有充分了解。</p>
             </div>

              <div>
                <strong className="text-lg text-primary block mb-2">1. 關鍵法規與文件 (Key Regulations & Documents)</strong>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                    <li><strong>核心法規：</strong>《地產代理常規（一般）規例》(Cap. 511C) 第10條（雙邊代理/安排視察）、第11條（處理要約/訂金）；《地產代理操守守則》第3.4.1段（保障客戶利益）。</li>
                </ul>
              </div>
              
              <div>
                 <h4 className="font-bold text-lg text-primary mb-3">2. 核心考點精講 (Key Exam Points)</h4>

                 <div className="space-y-4">
                    <ExamPoint number={1} title="公平呈遞所有要約（《常規規例》第11(e), (f)條）">
                        <List items={[
                            "代理必須按收到要約的<strong>先後次序</strong>，<strong>及時、客觀</strong>地將<strong>所有書面要約</strong>（無論出價高低或是否附帶條件）呈遞給賣方/業主。",
                            "不得因個人喜好、與買方的關係或期望獲得更高佣金而過濾、延遲或貶低任何要約。",
                            "<strong>《常規規例》第11(d)條：</strong>若代理同時代表買賣雙方，收到某一方的要約時，必須通知另一方已有要約存在，並將該要約的性質告知另一方。"
                        ]} />
                    </ExamPoint>

                    <ExamPoint number={2} title="安排視察的責任（《常規規例》第10(a), (b)條）">
                        <List items={[
                            "代理須協助安排買方/租客<strong>視察物業</strong>（包括泊車位和公用地方），並應<strong>陪同視察</strong>，除非買方/租客另有指示。",
                            "視察前須<strong>獲得賣方/業主的同意</strong>。",
                            "<strong>《常規規例》第10(b)條：</strong>若代理同時代表買賣雙方，則必須在獲<strong>雙方書面同意</strong>後，方可向買方/租客展示物業。"
                        ]} />
                    </ExamPoint>

                    <ExamPoint number={3} title="核實物業狀況與披露（《操守守則》及「盡職調查」原則）">
                        <List items={[
                            "陪同視察時，代理應基於已知信息（如物業資料表格、土地查冊結果）<strong>核實物業狀況是否與描述相符</strong>。",
                            "如發現新的或未披露的缺陷（如滲漏、結構問題、違例建築工程），有責任<strong>立即告知買方/租客</strong>，並向賣方/業主查詢，並建議客戶尋求專業意見（如建築師、測量師）。"
                        ]} />
                    </ExamPoint>
                 </div>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h4 className="text-red-800 font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle size={18} /> 3. 常見陷阱與案例題眼 (Common Traps & Exam Clues)
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-red-700 text-sm">
                    <li><strong>陷阱1：</strong>代理因個人判斷或利益考量，未將所有要約（特別是出價較低或條件複雜的要約）及時、完整地呈遞給賣方。</li>
                    <li><strong>陷阱2：</strong>未陪同買方視察物業，導致買方對物業狀況產生誤解而引發糾紛。</li>
                    <li><strong>陷阱3：</strong>在發現物業有明顯缺陷時，未能盡到告知和建議客戶尋求專業意見的義務。</li>
                    <li><strong>陷阱4：</strong>在雙邊代理情況下，未能遵守《常規規例》第10(b)條，未獲雙方書面同意即展示物業。</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-red-200 text-xs font-bold text-red-800">
                    題眼關鍵詞：「代理未將某個要約告知賣方」、「買方自行視察後發現問題」、「代理隱瞞物業缺陷」、「未經雙方書面同意即安排視察」。
                </div>
              </div>
            </div>
        </Stage>

        {/* Stage 4 */}
        <Stage number="4" title="階段四：臨時買賣合約簽署與訂金處理 (Stage 4: Signing Provisional Sale & Purchase Agreement & Handling Deposit)" icon={<PenTool size={28}/>}>
            <div className="space-y-6">
               <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                <strong className="text-primary block mb-2">核心目標</strong>
                <p className="text-sm text-slate-700">確保合約條款清晰、完整，訂金支付安全，最大限度降低交易風險，保護客戶利益。</p>
             </div>

               <div>
                <strong className="text-lg text-primary block mb-2">1. 關鍵法規與文件 (Key Regulations & Documents)</strong>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                    <li><strong>核心法規：</strong>《地產代理常規（一般）規例》(Cap. 511C) 第12條（處理訂金）、第13條（臨時買賣合約）；《地產代理條例（發牌）規例》(Cap. 511A) 第15條（信託帳戶）；《打擊洗錢及恐怖分子資金籌集條例》(Cap. 615)。</li>
                    <li><strong>核心指引：</strong>地產代理監管局的<strong>《執業通告》</strong>（特別是關於核實賣方身份和訂金托管的指引，如第10-001(CR)號通告）。</li>
                    <li><strong>核心文件：</strong>臨時買賣合約 (Provisional Agreement for Sale and Purchase)。</li>
                </ul>
              </div>

              <div>
                 <h4 className="font-bold text-lg text-primary mb-3">2. 核心考點精講 (Key Exam Points)</h4>

                 <div className="space-y-4">
                    <ExamPoint number={1} title="臨時買賣合約的完整性（《常規規例》第13(1)條及《執業通告》）">
                        <p className="text-sm text-slate-700 font-bold mb-1">禁止簽署「空白」或「要項漏空」的合約：</p>
                        <p className="text-sm text-slate-700 mb-2">在安排客戶簽署臨時買賣合約前，合約中所有<strong>關鍵條款的空白位置必須已填寫完畢</strong>。這包括但不限於：</p>
                        <List items={[
                            "物業地址（須與土地查冊及賣方身份證明文件一致）。",
                            "訂約各方（買方及賣方）的全名及身份證明文件號碼。",
                            "物業的<strong>成交價</strong>。",
                            "付款條款（臨時訂金數額、支付時間、加付訂金數額及支付時間、樓價餘款及支付時間）。",
                            "<strong>成交日期</strong>（或稱「完成交易日期」）。",
                            "交吉狀況（連租約出售或空置交吉）。",
                            "物業內連物品清單（如有）。"
                        ]} />
                        <p className="text-xs text-red-600 mt-2 bg-red-50 p-2 rounded">案例意義：讓客戶簽署一份還有關鍵信息空白的合約，是<strong>極其嚴重的違規行為</strong>，會將客戶置於巨大的法律和財務風險之中。地產代理有責任確保所有要項填寫完整。</p>
                    </ExamPoint>

                    <ExamPoint number={2} title="核實賣方身份——最高風險環節（《常規規例》第13(3)條及《執業通告》）">
                        <div className="bg-slate-50 p-4 rounded border mt-2">
                             <strong className="text-primary block mb-1">標準核實步驟：</strong>
                             <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
                                 <li><strong>核對身份證明文件：</strong>要求賣方出示身份證明文件（如香港身份證或護照），並仔細核對其姓名與<strong>緊接簽署臨約前進行的土地查冊中的註冊業主姓名是否完全一致</strong>。</li>
                                 <li><strong>進行土地查冊：</strong>為賣方行事的代理，必須在<strong>緊接簽署臨時買賣合約前</strong>進行土地查冊，並將查冊結果文本提供給買方參閱。</li>
                                 <li><strong>確保身份一致性：</strong>在安排簽署臨時買賣合約及特別是<strong>發放任何訂金給賣方前</strong>，必須確保賣方與註冊業主的身份是相同的。</li>
                             </ol>
                        </div>
                        <div className="bg-orange-50 p-4 rounded border border-orange-100 mt-3">
                             <strong className="text-orange-800 flex items-center gap-2 mb-2"><AlertTriangle size={16}/> 高風險情況處理（必須嚴格遵守《執業通告》的詳細指引）：</strong>
                             <div className="space-y-3">
                                 <div>
                                     <strong className="text-orange-900 text-sm">情況A：賣方聲稱是業主的授權代表</strong>
                                     <ul className="list-disc pl-5 text-xs text-orange-800">
                                         <li><strong>必須要求：</strong>賣方代表出示由業主正式簽署的<strong>授權書 (Power of Attorney)</strong>，且該授權書必須以<strong>契據 (Deed)</strong> 形式簽立並已在<strong>土地註冊處註冊</strong>。代理必須仔細核對其授權範圍（是否包括出售該物業及收取訂金）。</li>
                                         <li><strong>嚴禁接受：</strong>僅憑代表的口頭承諾、一份自稱已獲授權的聲明書、或未經註冊的普通授權書。</li>
                                     </ul>
                                 </div>
                                 <div>
                                     <strong className="text-orange-900 text-sm">情況B：土地查冊顯示近期有「送讓契」(Deed of Gift) 或業主身份存疑</strong>
                                     <ul className="list-disc pl-5 text-xs text-orange-800">
                                         <li><strong>必須行動：</strong>立即向買方清晰解釋該情況可能意味著業權存在瑕疵（例如涉及避債、欺詐、或業權可能被挑戰），並可能嚴重影響銀行按揭審批或導致日後業權糾紛。</li>
                                         <li><strong>必須建議：</strong>強烈建議買方在簽署任何協議前，務必<strong>尋求獨立法律意見</strong>，由律師詳細審查業權文件。</li>
                                         <li><strong>書面確認：</strong>如買方在被告知風險後仍決定繼續交易，代理應取得買方的<strong>書面確認</strong>，表明其已知悉並理解相關風險。</li>
                                     </ul>
                                 </div>
                             </div>
                        </div>
                    </ExamPoint>

                    <ExamPoint number={3} title="訂金處理的安全機制（《常規規例》第12條及《地產代理條例（發牌）規例》第15條）">
                        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                            <li><strong>首選方案：律師托管</strong>
                                <br/>持牌人必須以書面形式<strong>建議客戶安排由律師行托管所有訂金</strong>（包括臨時訂金和加付訂金），並解釋不托管的潛在風險。這是最安全的做法。
                            </li>
                            <li><strong>次選方案：代理代管（風險較高，需嚴格遵守）</strong>
                                <br/>如買賣雙方在被告知律師托管的優點和風險後，仍明確表示不同意律師托管，則代理方可代收訂金。但必須遵守以下嚴格規定：
                                <ol className="list-decimal pl-5 mt-1">
                                    <li><strong>存入信託帳戶：</strong>根據《地產代理條例（發牌）規例》第15條，代收的訂金必須<strong>立即存入</strong>代理公司在認可機構開立的<strong>獨立客戶款項信託帳戶 (Client Account)</strong>，<strong>絕不可與公司運營資金混合</strong>。</li>
                                    <li><strong>按協議或指示發放：</strong>只能嚴格根據臨時買賣合約的條款或買方的明確書面指示發放訂金。</li>
                                    <li><strong>取得買方書面確認：</strong>在賣方身份核實存疑的高風險情況下，代表買方行事的代理必須在發放訂金前，取得買方知悉風險並同意發放的<strong>書面確認</strong>。</li>
                                </ol>
                            </li>
                            <li><strong>訂金收據：</strong>代理在收取任何款項（包括訂金）後，必須立即向付款方發出<strong>書面收據</strong>，列明款項金額、日期、物業地址及付款人姓名。</li>
                        </ul>
                    </ExamPoint>
                 </div>
              </div>

               <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h4 className="text-red-800 font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle size={18} /> 3. 常見陷阱與案例題眼 (Common Traps & Exam Clues)
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-red-700 text-sm">
                    <li><strong>陷阱1（最嚴重）：</strong>未核實賣方身份，導致買家被冒充業主的騙徒詐騙巨額訂金。</li>
                    <li><strong>陷阱2：</strong>允許客戶簽署關鍵信息空白（如成交價、成交日期、付款條款）的臨時買賣合約。</li>
                    <li><strong>陷阱3：</strong>未積極建議律師托管訂金，或擅自將訂金直接以現金形式交給賣方，或將訂金存入公司普通帳戶。</li>
                    <li><strong>陷阱4：</strong>在賣方為授權代表時，未能核實授權書的有效性（如未以契據形式註冊）。</li>
                    <li><strong>陷阱5：</strong>在土地查冊顯示業權有疑點（如近期送讓契）時，未能向買方披露風險並建議尋求法律意見。</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-red-200 text-xs font-bold text-red-800">
                    題眼關鍵詞：「賣方稱代表業主但無註冊授權書」、「土地查冊顯示近期有送讓契」、「代理建議將訂金直接交給賣方」、「買方簽署時合約上關鍵條款為空白」、「代理將訂金存入公司普通帳戶」。
                </div>
              </div>
            </div>
        </Stage>

        {/* Stage 5 */}
        <Stage number="5" title="階段五：成交前核查與土地查冊深度解讀 (Stage 5: Pre-Completion Verification & In-depth Land Search Analysis)" icon={<Handshake size={28}/>}>
            <div className="space-y-6">
                <div>
                   <strong className="text-lg text-primary block mb-2">一、基礎概念與法定責任 (Fundamental Concepts & Statutory Obligations)</strong>
                   <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                       <li><strong>1.1 土地查冊的本質與目的 (Nature and Purpose of Land Search)：</strong>
                           <ul className="list-[circle] pl-5 mt-1">
                               <li><strong>定義：</strong>是查詢並獲取由香港土地註冊處 (Land Registry) 備存的、針對某一特定物業的<strong>「土地登記冊 (Land Register)」</strong>官方記錄的行為及其結果。</li>
                               <li><strong>法律地位：</strong>該土地登記冊是公開的記錄，旨在實現兩大法定目的：
                                   <ol className="list-decimal pl-5 mt-1">
                                       <li>防止秘密及有欺詐成分的物業轉易。</li>
                                       <li>提供容易追溯和確定土地財產及不動產業權的方法。</li>
                                   </ol>
                               </li>
                               <li><strong>【考點：信息使用限制】：</strong>基於上述目的，持牌人不得將查冊所得的個人資料（如業主姓名、地址、身份證明文件號碼）用於任何與地產代理業務無關的用途（如電話營銷、直接促銷），否則可能違反《個人資料（私隱）條例》(Personal Data (Privacy) Ordinance, Cap. 486)。</li>
                           </ul>
                       </li>
                       <li><strong>1.2 核心法定責任：《地產代理常規（一般）規例》第13(4)條</strong>
                           <ul className="list-[circle] pl-5 mt-1">
                               <li><strong>責任主體：</strong>「為住宅物業的<strong>賣方</strong>行事的持牌人」。此責任明確且不可轉移。即使買方有代理，賣方的代理也必須履行此項法定責任。</li>
                               <li><strong>關鍵時點：</strong>「在<strong>緊接</strong>買賣協議訂立之前」。
                                   <br/>「緊接」的解讀：指在簽署臨時買賣協議的當天，在落筆簽字前的那一刻。提前一天或更早進行的查冊，因可能無法反映最新的業權狀況（例如在查冊後至簽署臨約前，有新的押記令被註冊），而不符合法規要求。
                               </li>
                               <li><strong>必須動作：</strong>「進行土地查冊」並「向買方提供該土地查冊結果的<strong>文本</strong>」。
                                   <br/>「文本」的含義：指必須提供有形的、可保存的副本，如打印本或通過電子郵件發送的官方PDF文件。口頭告知查冊結果或僅在屏幕上展示查冊內容，均不符合規定。
                               </li>
                           </ul>
                       </li>
                       <li><strong>1.3 查冊系統與類型選擇 (Land Search System & Type Selection)：</strong>
                           <ul className="list-[circle] pl-5 mt-1">
                               <li><strong>系統：</strong>通過土地註冊處的「綜合註冊資訊系統 (Integrated Registration Information System, IRIS)」進行。</li>
                               <li><strong>類型選擇【最佳實踐】：</strong>法規雖未明指，但為履行盡職調查的專業責任，持牌人必須選擇進行<strong>「過去及現時土地查冊」(Current and All Historical Entries Search)</strong>。因為只有此類型才能提供完整的「業權鏈」，揭示物業過去的交易歷史和潛在風險（如近期存在的「送讓契」、遺產承辦等，這些都可能影響業權的穩固性）。僅進行「現時土地查冊」可能不足以發現所有潛在風險。</li>
                           </ul>
                       </li>
                   </ul>
                </div>

                <div>
                   <strong className="text-lg text-primary block mb-4">二、土地登記冊欄目精解與風險識別 (In-depth Analysis of Land Register Columns & Risk Identification)</strong>
                   <p className="text-sm text-slate-600 mb-4">香港的土地登記冊（Land Register）由土地註冊處備存，分為四個主要部分。每個部分都提供了關於物業業權的重要信息，地產代理必須仔細閱讀和理解，以識別潛在的風險。</p>

                   <div className="space-y-4">
                       <InfoCard title="2.1 第一部分：物業資料 (Part I: Property Particulars)">
                           <p className="text-sm text-slate-700 mb-2">此部分主要記載物業的基本描述和政府批租條款。</p>
                           <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                               <li><strong>物業地址及地段號碼 (Property Address & Lot Number)：</strong>物業的正式地址和在土地註冊處登記的地段編號。</li>
                               <li><strong>政府租契詳情 (Government Lease Details)：</strong>批租期（通常為75年、99年或999年，可續期）、地租條款、批地條件（Conditions of Grant/Exchange/Sale等）。</li>
                               <li><strong>土地用途限制 (User Restrictions)：</strong>例如，物業是否只可用作住宅、商業、工業或其他特定用途。</li>
                               <li><strong>其他限制性契諾 (Other Restrictive Covenants)：</strong>可能在批地文件或換地文件中載明，例如建築密度、高度限制、地段覆蓋率等。</li>
                               <li>
                                   <strong className="text-orange-700 block mt-2 mb-1">風險識別：</strong>
                                   <ul className="list-[square] pl-5 text-orange-800">
                                       <li><strong>地址不符：</strong>查冊地址與實際物業地址有差異，可能涉及單位合併或分拆，需進一步核實。</li>
                                       <li><strong>租契年期與續期機制（特別重要）：</strong>
                                           <br/><strong>一般原則：</strong>香港絕大多數土地均以政府租契形式批出。
                                           <br/><strong>1997年後的續期：</strong>根據《政府租契條例》(Government Lease Ordinance, Cap. 40)，所有在1997年6月30日（即香港主權移交前）批出，並於該日或之後屆滿的政府租契，除非該租契不屬可續期租契或政府已就該租契的續期批出新租契，否則均自動續期50年，由緊接該租契屆滿後的翌日開始計算，而無須補地價，但須繳付每年地租，款額相當於物業應課差餉租值的3%。
                                           <br/><strong>【考點應用】：</strong>若物業的政府租契在2047年6月30日（即1997年後50年）或之前屆滿，這屬於自動續期的範疇，通常不會有問題。但在極少數情況下，若政府租契條款有特別規定「不可續期」，或涉及新界土地的舊批約（如新界九十九年租約，通常於2047年屆滿），則需特別留意。
                                           <br/><strong>地產代理責任：</strong>應向客戶解釋政府租契的年期和自動續期機制，並在查冊中確認是否有任何不尋常的續期限制。對於2047年6月30日之後才屆滿的租契，其後續安排仍需留意未來政策。
                                       </li>
                                       <li><strong>用途限制：</strong>物業的實際用途是否符合政府租契或批地條件所訂明的用途。例如，住宅物業被用作商業用途，可能違反批地條件，政府有權執行甚至收回土地。</li>
                                       <li><strong>批地條件未履行：</strong>批地條件中可能載有某些發展商或業主需履行的責任（例如修建公共設施），若未履行，可能會影響物業的業權。</li>
                                       <li><strong>地租拖欠：</strong>雖然地租拖欠通常不會在第一部分顯示，但查冊時應留意是否有相關註釋，並建議客戶核實地租繳納情況。</li>
                                   </ul>
                               </li>
                           </ul>
                       </InfoCard>

                       <InfoCard title="2.2 第二部分：業主資料 (Part II: Ownership)">
                           <p className="text-sm text-slate-700 mb-2">此部分記錄物業的業權歷史，包括現任及過往業主的資料。</p>
                           <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                               <li><strong>現任業主姓名 (Current Owner(s)' Name)：</strong>物業現時的註冊業主姓名或公司名稱。</li>
                               <li><strong>過往業主姓名 (Previous Owner(s)' Name)：</strong>物業過往的註冊業主。</li>
                               <li><strong>轉讓日期 (Date of Assignment)：</strong>業權轉讓的日期。</li>
                               <li><strong>代價 (Consideration)：</strong>物業買賣的成交價。</li>
                               <li><strong>業權性質 (Nature of Ownership)：</strong>
                                   <ul className="list-[square] pl-5 mt-1">
                                       <li><strong>聯權共有 (Joint Tenancy)：</strong>通常用於夫妻，若其中一方離世，其業權份數自動轉移給尚存者（「長命契」）。</li>
                                       <li><strong>分權共有 (Tenancy in Common)：</strong>各共有人擁有獨立的業權份數，可自由轉讓其份數，或在離世後按遺囑處理。</li>
                                   </ul>
                               </li>
                               <li>
                                   <strong className="text-orange-700 block mt-2 mb-1">風險識別：</strong>
                                   <ul className="list-[square] pl-5 text-orange-800">
                                       <li><strong>業主姓名不符：</strong>查冊上的業主姓名與賣方提供的身份證明文件不符，可能涉及身份冒用、已改名或業權轉讓未註冊。</li>
                                       <li><strong>聯權共有：</strong>若賣方為聯權共有業主之一，需確認所有聯權共有人均同意出售。若其中一方離世，則需提供死亡證明，證明業權已轉移給尚存者。</li>
                                       <li><strong>分權共有：</strong>若賣方為分權共有業主之一，需確認所有共有人均同意出售，或賣方只出售其個人份數。</li>
                                       <li><strong>近期業權轉變：</strong>
                                           <br/><strong>送讓契 (Deed of Gift)：</strong>若近期有「送讓契」轉讓，可能存在「避債」風險。根據《破產條例》，若在破產前五年內以低於市價或無償轉讓物業，破產受託人有權申請撤銷該轉讓。銀行通常不會向此類物業批出按揭。
                                           <br/><strong>遺產承辦 (Grant of Probate / Letters of Administration)：</strong>若業主已故且物業涉及遺產承辦，則必須確認遺產承辦書已獲批，並由遺產執行人或管理人簽署買賣合約。
                                           <br/><strong>未成年業主：</strong>若業主為未成年人，物業交易需經法庭批准，手續複雜。
                                           <br/><strong>信託物業：</strong>若物業由信託持有，需確認信託條款和受託人的出售權力。
                                       </li>
                                   </ul>
                               </li>
                           </ul>
                       </InfoCard>

                       {/* Part 3 Encumbrances - Detailed */}
                       <div className="border rounded-lg overflow-hidden border-slate-200">
                           <div className="bg-primary text-white p-4 font-bold flex items-center gap-2">
                               <FileText size={20}/>
                               2.3 第三部分：物業涉及的轇轕 (Part III: Encumbrances)
                           </div>
                           <div className="bg-white p-4">
                               <p className="text-sm text-slate-600 mb-4">
                                   此部分是識別物業產權負擔最關鍵的部分，詳細列出所有已在土地註冊處註冊的、對物業業權構成約束、限制或潛在負債的文書。這些負擔可能影響物業的價值、阻礙其自由轉讓或限制其使用方式。買家通常期望獲得「良好業權」(Good Title)，即一個沒有未解除或未披露的產權負擔的業權。
                               </p>
                               <div className="divide-y divide-slate-200 text-sm">
                                   <div className="py-4">
                                       <strong className="text-primary text-base block mb-1">1. 按揭 (Mortgage)</strong>
                                       <p className="text-slate-700"><strong>查冊顯示：</strong>會列出按揭契的文書性質（例如 "Mortgage"）、註冊日期和紀念冊號碼，以及借款人（業主）和貸款機構（銀行）的名稱。</p>
                                       <p className="text-slate-700 mt-1"><strong>風險與影響：</strong>物業的業權被抵押給貸款人。在交易完成前，賣方必須清還按揭貸款，並由貸款人發出<strong>解除按揭契 (Deed of Discharge)</strong> 文件，然後在土地註冊處註冊，以解除此負擔。若未能解除，買方無法獲得無負擔的業權。銀行在審批按揭時，會要求物業沒有未解除的按揭。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《物業轉易及財產條例》(Cap. 219)。</p>
                                   </div>
                                   <div className="py-4 bg-slate-50 px-2 -mx-2">
                                       <strong className="text-primary text-base block mb-1">2. 押記令 (Charging Order)</strong>
                                       <p className="text-slate-700"><strong>查冊顯示：</strong>會列出押記令的文書性質（例如 "Charging Order"）、註冊日期和紀念冊號碼，以及債權人（通常是法庭判決的勝訴方）和債務人（業主）的名稱。</p>
                                       <p className="text-slate-700 mt-1"><strong>風險與影響：</strong>由法庭發出的命令，將債務人的物業作為其所欠債務的抵押。債權人可以申請出售物業以償還債務。在交易完成前，賣方必須清還債務並取得<strong>解除押記令 (Discharge of Charging Order)</strong> 註冊。這是<strong>高風險負擔</strong>，銀行不會向有未解除押記令的物業批出按揭。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《高等法院條例》(Cap. 4) / 《區域法院條例》(Cap. 336)。</p>
                                   </div>
                                   <div className="py-4">
                                       <strong className="text-primary text-base block mb-1">3. 建築令 / 修葺令 / 清拆令 (Building Order / Repair Order / Demolition Order)</strong>
                                       <p className="text-slate-700"><strong>查冊顯示：</strong>會列出命令的文書性質（例如 "Building Order"、"Repair Order"、"Demolition Order"）、發出部門（如屋宇署）、發出日期和紀念冊號碼。</p>
                                       <p className="text-slate-700 mt-1"><strong>風險與影響：</strong>由政府部門（如屋宇署、地政總署）發出的命令，要求業主對物業進行修葺、拆卸違建物、改正違規建築等。業主有法律責任執行命令，否則可能面臨罰款、檢控，甚至政府代為執行工程後向業主追討費用並註冊<strong>「工程費用押記令」(Cost Recovery Charge)</strong>。這些命令會嚴重影響物業的市值和銀行按揭審批。</p>
                                       <p className="text-slate-700 mt-1"><strong>地產代理責任：</strong>應建議客戶索取命令副本，了解其性質和所需工程，並諮詢專業意見（如測量師或律師）。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《建築物條例》(Cap. 123)。</p>
                                   </div>
                                   <div className="py-4 bg-slate-50 px-2 -mx-2">
                                       <strong className="text-primary text-base block mb-1">4. 政府租契中的限制性契諾 (Restrictive Covenants in Government Lease)</strong>
                                       <p className="text-slate-700"><strong>查冊顯示：</strong>通常不會獨立列出，而是指明物業受批地文件（例如 "Conditions of Grant"、"Conditions of Sale" 或 "Conditions of Exchange"）中的條款約束。這些批地文件本身已在土地註冊處註冊。</p>
                                       <p className="text-slate-700 mt-1"><strong>風險與影響：</strong>政府租契或批地條件中載有土地使用的條款和限制，例如土地用途（住宅、商業、工業）、建築密度、高度限制等。其中的限制性契諾屬於產權負擔，限制了業主對物業的使用權。違反這些契諾可能導致政府執行契約，甚至收回土地。</p>
                                       <p className="text-slate-700 mt-1"><strong>地產代理責任：</strong>應提醒客戶查閱批地文件，了解其對物業使用的限制。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《政府土地權（重收及轉歸補償）條例》(Cap. 124)。</p>
                                   </div>
                                   <div className="py-4">
                                       <strong className="text-primary text-base block mb-1">5. 地役權 / 通行權 (Easement / Right of Way)</strong>
                                       <p className="text-slate-700"><strong>查冊顯示：</strong>會列出地役權契據的文書性質（例如 "Deed of Grant of Easement" 或 "Right of Way"）、註冊日期和紀念冊號碼。</p>
                                       <p className="text-slate-700 mt-1"><strong>風險與影響：</strong>賦予某人或某物業使用另一物業的權利，例如通行權（穿過鄰近物業的權利）、排污權、採光權等。這限制了物業業主對其土地的獨佔權和使用權，可能影響物業的開發或使用。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《物業轉易及財產條例》(Cap. 219)。</p>
                                   </div>
                                   <div className="py-4 bg-red-50 px-2 -mx-2 border-l-4 border-red-500">
                                       <strong className="text-red-800 text-base block mb-1">6. 訴訟待決登記 (Lis Pendens)</strong>
                                       <p className="text-red-700"><strong>查冊顯示：</strong>會列出文書性質 "Lis Pendens"、註冊日期和紀念冊號碼，以及相關訴訟的法庭編號和各方名稱。</p>
                                       <p className="text-red-700 mt-1"><strong>風險與影響：</strong>在土地註冊處註冊的通知，表明涉及該物業業權的訴訟正在進行中。物業業權存在重大不確定性，買方若在此期間購入物業，可能會受最終法庭判決的約束，導致業權不穩或蒙受損失。這是<strong>高危風險負擔</strong>，嚴重影響物業的轉讓性和銀行按揭審批。</p>
                                       <p className="text-red-700 mt-1"><strong>應對策略：</strong>買方通常應避免購買有訴訟待決登記的物業，除非訴訟性質輕微且有可靠的法律意見確認風險可控。律師會極力建議在訴訟未解決前切勿完成交易。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《土地註冊條例》(Cap. 128)。</p>
                                   </div>
                                   <div className="py-4">
                                       <strong className="text-primary text-base block mb-1">7. 已註冊的租賃協議 (Registered Tenancy Agreements)</strong>
                                       <p className="text-slate-700"><strong>查冊顯示：</strong>會列出租賃契據的文書性質（例如 "Tenancy Agreement" 或 "Lease"）、註冊日期和紀念冊號碼，以及業主和租客名稱、租期等。</p>
                                       <p className="text-slate-700 mt-1"><strong>風險與影響：</strong>根據《土地註冊條例》，租期超過三年的租賃協議必須在土地註冊處註冊才具備對抗第三方的效力。若物業以「連租約」形式出售，買方購入後必須履行現有租賃協議的條款。若買方期望「交吉」購入，則需確保賣方在成交前已妥善終止租約並清空物業。</p>
                                       <p className="text-slate-700 mt-1"><strong>未註冊的租賃協議：</strong>雖然未註冊的租賃協議不會在查冊中顯示，但若買方在交易時知悉存在未註冊的長期租約，買方仍可能受其約束，無法獲得物業的空置管有權。地產代理應詢問賣方物業是否有租賃，並向買方披露。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《土地註冊條例》(Cap. 128)。</p>
                                   </div>
                                   <div className="py-4 bg-slate-50 px-2 -mx-2">
                                       <strong className="text-primary text-base block mb-1">8. 大廈公契與其違反所產生的押記 (Deed of Mutual Covenant & Charges Arising from Breaches)</strong>
                                       <p className="text-slate-700"><strong>查冊顯示：</strong>大廈公契本身會以「Deed of Mutual Covenant」的形式註冊。但違反公契條款本身不會直接在查冊中顯示，而是可能導致：</p>
                                       <ul className="list-[circle] pl-5 text-slate-700 mt-1 mb-1">
                                           <li><strong>管理費或維修基金押記備忘錄 (Memorandum of Charge for Management Fees/Repair Funds)：</strong>因拖欠管理費或維修基金而由業主立案法團或管理公司在土地註冊處註冊的押記。</li>
                                           <li><strong>政府部門發出的命令：</strong>例如因僭建而導致的建築令或清拆令（已在第3點提及）。</li>
                                       </ul>
                                       <p className="text-slate-700"><strong>風險與影響：</strong>大廈公契規範了多層物業的管理、維修、公共地方使用規則及業主權利義務。違反公契條款（例如非法改建、僭建、拖欠管理費）可能導致業主立案法團或管理公司採取法律行動，要求業主糾正違規行為，或因拖欠費用而註冊押記，影響物業業權。</p>
                                       <p className="text-slate-700 mt-1"><strong>地產代理責任：</strong>應建議客戶查閱大廈公契，了解其對物業使用的限制。若發現物業有明顯的公契違反（如僭建），應告知買方並建議尋求專業意見。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《建築物管理條例》(Cap. 344)。</p>
                                   </div>
                                   <div className="py-4">
                                       <strong className="text-primary text-base block mb-1">9. 欠繳地租 / 差餉 (Outstanding Government Rent / Rates)</strong>
                                       <p className="text-slate-700"><strong>查冊顯示：</strong>通常不會直接在產權負擔部分顯示，但若政府已採取行動追討並在物業上註冊了<strong>押記令</strong>，則會顯示。</p>
                                       <p className="text-slate-700 mt-1"><strong>風險與影響：</strong>物業未繳納政府地租或差餉。欠款會成為物業的<strong>優先押記</strong>。政府有權追討欠款，甚至在極端情況下可採取行動收回物業。</p>
                                       <p className="text-slate-700 mt-1"><strong>地產代理責任：</strong>應提醒客戶在交易前核實地租和差餉的繳納情況。律師會在成交前要求賣方提供清繳證明。</p>
                                       <p className="text-slate-500 text-xs mt-1">法律依據：《地租（評估及徵收）條例》(Cap. 515) / 《差餉條例》(Cap. 116)。</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <InfoCard title="2.4 第四部分：備註 (Part IV: Remarks)">
                           <p className="text-sm text-slate-700 mb-2">此部分記錄一些不屬於前三部分，但仍與物業業權相關的特殊情況或警示。</p>
                           <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                               <li><strong>常見內容：</strong>
                                   <ul className="list-[square] pl-5 mt-1">
                                       <li><strong>未註冊文書的警告：</strong>例如「本登記冊可能未反映所有已呈交註冊處但尚未完成註冊程序的文書」。</li>
                                       <li><strong>法庭命令的指示：</strong>例如限制物業轉讓，或要求在特定條件下才能轉讓。</li>
                                       <li><strong>其他政府部門的通知：</strong>例如土木工程拓展署的斜坡維修責任。</li>
                                   </ul>
                               </li>
                               <li>
                                   <strong className="text-orange-700 block mt-2 mb-1">風險識別：</strong>
                                   <ul className="list-[square] pl-5 text-orange-800">
                                       <li><strong>未註冊文書的風險：</strong>儘管《土地註冊條例》規定未註冊文書對善意買家沒有約束力，但備註中的警告提示了可能存在尚未反映在登記冊上的交易或負擔，買方律師需特別留意。</li>
                                       <li><strong>任何不尋常的備註：</strong>都應立即諮詢律師，以評估其對物業業權或交易的潛在影響。</li>
                                   </ul>
                               </li>
                           </ul>
                       </InfoCard>

                       <div className="bg-slate-100 p-4 rounded-lg mt-6">
                           <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><CheckCircle size={18}/> 2.5 地產代理的角色 (Role of Estate Agent)</h4>
                           <p className="text-sm text-slate-600 mb-2">地產代理在土地查冊過程中扮演著關鍵的<strong>解釋和提示角色</strong>：</p>
                           <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                               <li><strong>進行查冊：</strong>根據《常規規例》第13(4)條，為住宅物業賣方行事的持牌人必須在緊接簽署臨時買賣協議前進行土地查冊。</li>
                               <li><strong>提供文本：</strong>將查冊結果的文本提供給買方。</li>
                               <li><strong>解釋主要發現：</strong>向客戶解釋查冊結果中的主要發現，特別是潛在的產權負擔（如按揭、建築令、押記令、訴訟待決登記）。</li>
                               <li><strong>提示風險：</strong>提醒客戶任何已識別的風險，例如物業有僭建、業權爭議、或近期有送讓契等。</li>
                               <li><strong>強烈建議尋求法律意見：</strong>代理人不得提供法律意見。當涉及複雜的業權問題、產權負擔或法律風險時，代理人必須<strong>強烈建議客戶尋求獨立的法律意見</strong>，由律師詳細審閱所有文件並提供專業判斷。這應以<strong>書面形式</strong>記錄。</li>
                           </ul>
                           <p className="text-sm text-slate-500 mt-2 italic">理解土地登記冊的每個欄目及其背後的法律意義，是地產代理專業服務的基石，也是避免客戶蒙受損失和代理人自身承擔法律責任的重要保障。</p>
                       </div>
                   </div>
                </div>
            </div>
        </Stage>
      </div>
    </section>
  );
};