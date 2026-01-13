
#import "template.typ": *

#section-header("第三部分：專題領域深度解析")

// Topic 1
#block(below: 2em)[
  #text(size: 16pt, weight: "bold", fill: color-primary)[專題一：租賃事務深度解析]
  #v(0.5em)
  #text(size: 10pt, fill: color-slate-600)[租賃是地產代理最核心的業務之一。]
]

#sub-section-header("一、核心法規依據")
#list-item[《地產代理常規（一般）規例》]
#list-item[《業主與租客（綜合）條例》]

#sub-section-header("二、租賃代理關係的建立")
必須使用訂明表格：
#grid(
  columns: (1fr, 1fr, 1fr),
  gutter: 1em,
  block(fill: color-blue-50, inset: 8pt, radius: 4pt)[*表格 2* \ 業主代理],
  block(fill: color-blue-50, inset: 8pt, radius: 4pt)[*表格 4* \ 租客代理],
  block(fill: color-blue-50, inset: 8pt, radius: 4pt)[*表格 5* \ 雙邊代理],
)
*雙邊代理須獲雙方書面同意。*

#sub-section-header("三、租約的形式與註冊")
#list-item[*不超過3年：*可非契據（如書面），建議書面。]
#list-item[*超過3年：*必須*契據 (Deed)* 並*註冊*。]

#sub-section-header("四、分間單位（劏房）規管")
*強制性責任：*
#list-item[解釋租住權保障（4年租住權）。]
#list-item[解釋租金規管（加幅上限10%）。]
#list-item[提供表格CR110摘要副本。]

#sub-section-header("五、表格CR109")
業主須在簽租約後*1個月內*遞交，否則不可追租。

// Topic 2
#block(below: 2em, above: 2em)[
  #text(size: 16pt, weight: "bold", fill: color-primary)[專題二：建築物合規與用途深度解析]
]

#sub-section-header("一、佔用許可證（入伙紙）")
證明樓宇落成及批准用途。代理*必須依據入伙紙*提供用途資料。

#block(fill: color-red-50, inset: 12pt, radius: 4pt, stroke: 1pt + color-red-100)[
  *違例建築工程（僭建物）風險：*
  #list-item[*安全風險：*結構、消防。]
  #list-item[*法律風險：*清拆令、釘契。]
  #list-item[*財務風險：*銀行拒批按揭。]
  
  *持牌人行動：*
  #list-item[查冊看是否有清拆令。]
  #list-item[對比入伙紙圖則。]
  #list-item[*如實披露*並建議尋求專業意見。]
]

// Topic 3
#block(below: 2em, above: 2em)[
  #text(size: 16pt, weight: "bold", fill: color-primary)[專題三：一手住宅銷售深度解析]
]

#sub-section-header("一、關鍵合規要點：面積")
*唯一標準：*必須使用*「實用面積」(Saleable Area)*。
違反此規定屬刑事罪行。

#sub-section-header("二、法定銷售文件")
#list-item[*售樓說明書：*7日前公布。]
#list-item[*價單、銷售安排：*3日前公布。]
代理應指引客戶查閱賣方提供的法定文件。

#sub-section-header("三、禁止行為")
#list-item[不得提前收票（探求意向）。]
#list-item[禁止提供貸款。]
#list-item[禁止簽署漏空合約。]
