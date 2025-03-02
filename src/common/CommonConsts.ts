/*********************************
 *        定数クラス
 *********************************/

export const WORKS_LIST = [
  {
    buildingName: "桜丘小学校旧校舎",
    cost: "200~400万",
    content:
      "築50年を超え老朽化した旧校舎を解体。アスベスト調査を実施し、適切な処理を行った後、安全に撤去。更地にして新校舎建設の準備を整えました。",
    type: "解体",
    img: "<Image  width={400} height={400} src='/img/works1.jpg' alt=''></Image>",
  },
  {
    buildingName: "新港合同庁舎3号館",
    cost: "400~600万",
    content:
      "老朽化した給排水設備の交換を実施。全ての水道管を耐久性の高い材質に変更し、水質の向上と漏水リスクの低減を図りました。また、節水型の設備を導入しました。",
    type: "外装",
    img: "<Image  width={400} height={400} src='/img/works2.jpg' alt=''></Image>",
  },
  {
    buildingName: "翠嵐オフィスタワー",
    cost: "100～300万",
    content:
      "築20年が経過し、劣化していたフローリングを無垢材のものに張り替えました。遮音性能の向上を図り、階下への音漏れ対策として防音シートも施工しました。",
    type: "内装",
    img: "<Image  width={400} height={400} src='/img/works3.jpg' alt=''></Image>",
  },
  {
    buildingName: "青葉市民ホール",
    cost: "100～300万",
    content:
      "外壁のひび割れや劣化部分を補修し、耐久性の高い塗料で全面塗装を実施しました。景観に配慮し、周囲の建物と調和する色合いを選定しました。",
    type: "外装",
    img: "<Image  width={400} height={400} src='/img/works4.jpg' alt=''></Image>",
  },
  {
    buildingName: "陽だまり老人ホーム",
    cost: "2000～4000万",
    content:
      "施設内の主要な廊下や居室に手すりを新設し、滑りにくい床材へ変更しました。さらに、玄関にスロープを設置し、車椅子利用者や歩行が困難な方がより快適に移動できる環境を整備しました。",
    type: "外装",
    img: "<Image  width={400} height={400} src='/img/works5.jpg' alt=''></Image>",
  },
  {
    buildingName: "楓の杜図書館",
    cost: "1000～3000万",
    content:
      "長年の使用による劣化が進んでいた書架スペースの壁紙と床材をリニューアル。落ち着いた木目調のデザインを採用し、より快適に読書や学習ができる空間へと改善しました。",
    type: "内装",
    img: "<Image  width={400} height={400} src='/img/works6.jpg' alt=''></Image>",
  },
  {
    buildingName: "白波倉庫第3棟",
    cost: "900～2700万",
    content:
      "倉庫内の防火性能を向上させるため、耐火塗料を全体に塗布し、防火扉を新設しました。また、消防法に準拠した最新の自動火災報知設備を導入し、万が一の火災発生時に迅速な対応が可能となるよう改善しました。",
    type: "耐火対策",
    img: "<Image  width={400} height={400} src='/img/works7.jpg' alt=''></Image>",
  },
];

// ヘッダー メニューリスト
export const MENU_LIST = [
  { name: "トップ", link: "/", query: { srcDiv: "header" } },
  { name: "会社概要", link: "/about", query: { srcDiv: "header" } },
  {
    name: "施工実績",
    link: "/works",
    query: { srcDiv: "header" },
  },
  {
    name: "サービス",
    link: "/services",
    query: { srcDiv: "header" },
  },
  {
    name: "問い合わせ",
    link: "/contact",
    query: { srcDiv: "header" },
  },
];

export const WORKS_IMG_HEIGHT = 400;
export const WORKS_IMG_WIDTH = 400;
