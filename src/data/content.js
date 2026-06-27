// =========================================================
// 以下所有文本均原样提取自：
//   0608国家级教学成果奖申报书(2).docx → 申报书主体
//   教学成果佐证材料.docx → 佐证材料
// 未做任何删改。
// =========================================================

// ========== 顶部导航 ==========
export const topNavItems = [
  { key: 'home', label: '首页', path: '/' },
  { key: 'recommend', label: '申报书', path: '/recommend' },
  { key: 'summary', label: '总结报告', path: '/summary', children: [
    { key: 'intro', label: '成果简介', path: '/summary?section=intro' },
    { key: 'problem', label: '教学问题及方法', path: '/summary?section=problem' },
    { key: 'innovation', label: '成果创新点', path: '/summary?section=innovation' },
    { key: 'effect', label: '推广应用效果', path: '/summary?section=effect' },
    { key: 'awards', label: '曾获奖励情况', path: '/summary?section=awards' }
  ]},
  { key: 'effect', label: '培养成效', path: '/effect', children: [
    { key: 'teacherCompetition', label: '教师竞赛', path: '/effect?tab=teacherCompetition' },
    { key: 'studentCompetition', label: '学生技能竞赛', path: '/effect?tab=studentCompetition' }
  ]},
  { key: 'promotion', label: '推广应用', path: '/promotion', children: [
    { key: 'schoolApp', label: '院校应用', path: '/promotion?tab=schoolApp' },
    { key: 'companyApp', label: '部分合作企业应用推广情况', path: '/promotion?tab=companyApp' },
    { key: 'otherApp', label: '其他应用单位', path: '/promotion?tab=otherApp' }
  ]},
  { key: 'media', label: '媒体报道', path: '/media' },
  { key: 'international', label: '国际认可', path: '/international' },
  { key: 'evidence', label: '其他佐证', path: '/evidence', children: [
    { key: 'case1', label: '案例1：行走课堂·数智铸魂', path: '/evidence?filter=case1' },
    { key: 'case2', label: '案例2：校企协三方联动', path: '/evidence?filter=case2' },
    { key: 'case3', label: '案例3：标准引领·产教适配', path: '/evidence?filter=case3' },
    { key: 'case4', label: '案例4：双元三融·数智赋能', path: '/evidence?filter=case4' },
    { key: 'case5', label: '案例5：活页模块·数智融合', path: '/evidence?filter=case5' },
    { key: 'case6', label: '案例6：行业深耕·教学反哺', path: '/evidence?filter=case6' },
    { key: 'case7', label: '案例7：基地共建·实战育人', path: '/evidence?filter=case7' },
    { key: 'case8', label: '案例8：白泽赋能·生态重构', path: '/evidence?filter=case8' },
    { key: 'case9', label: '案例9：留学山旅·中蒙共育', path: '/evidence?filter=case9' },
    { key: 'cooperation', label: '创新校企合作机制', path: '/evidence?filter=cooperation' },
    { key: 'base', label: '建设产教融合实训基地', path: '/evidence?filter=base' },
    { key: 'teacher', label: '师资队伍建设', path: '/evidence?filter=teacher' },
    { key: 'textbook', label: '出版教材著作和论文', path: '/evidence?filter=textbook' },
    { key: 'project', label: '社会服务', path: '/evidence?filter=project' },
    { key: 'award2025', label: '2025年度优秀理事单位匾额', path: '/evidence?filter=award2025' }
  ]}
]

// ========== 成果简介（来自申报书 一、成果简介） ==========
export const overview = {
  title: '成果简介',
  paragraphs: [
    '2018年，文化和旅游部组建，文旅融合进入系统推进阶段；全国教育大会强调落实立德树人根本任务，职业教育加快由规模扩张转向内涵提升。由此，旅游类人才培养既要提升红色文化传播与职业能力，又要适应产业对数字素养的新需求。实践中，仍存在育人目标统合不够、红旅资源转化不深、实践场景贯通不足、知行转化评价不准等问题。',
    '围绕上述问题，成果依托2018年山东省高等学校人文社会科学项目《"工匠精神"为内核的高职旅游专业人才职业素养培育研究》启动探索，2019年形成阶段性成果并进入实践检验，经过六年多实践，构建了"红智双融·场景贯通·知行转化"的大思政实践育人模式。模式以立德树人为根本遵循，吸收情境学习、知行合一和具身学习理论，以"红智双融"为育人理念，以"场景贯通"为实践路径，以"知行转化"为育人指向，构建"目标融通—课程转译—场景贯通—评价校准"逻辑闭环。',
    '按照"价值引领、情境实践、人机协同、循证改进"的理论转化路径，形成四项递进式改革举措。目标融通，以"红智双融"重塑育人目标，将红色文化传播力、旅游职业胜任力、人工智能应用力和社会责任担当纳入人才培养全过程；课程转译，以双线课程激活红旅资源，通过习近平文化思想"三进"示范课、垂直大模型"白泽"，将红色资源转化为讲解词撰写、智慧导览服务等课程任务；场景贯通，以六景协同延展育人时空，贯通专业课堂、虚拟课堂、实景课堂、赛事课堂、企业课堂、行走课堂六大场景，构建"四阶·双环"实践教学体系，实现专业课100%融入红色元素、100%体现实践育人特征；评价校准，以"三维四度"赋能过程评价，聚焦思想素养、专业素养、数字素养三个维度，构建覆盖课堂表现、实践任务、赛事参与、企业实训的过程性数据采集体系，实现"评价—反馈—改进"动态闭环。',
    '成果实施以来，学生完成红色短视频1200个，获省级以上技能竞赛奖项39项。旅游管理等3个专业群建成省级高水平专业群，5个专业通过联合国世界旅游组织教育质量认证，建成省级教学团队6个、黄大年式教师团队1个，出版国家规划教材7部。学校牵头制定旅行社经营与管理专业国家教学标准，牵头开发5个省级专业教学标准；"白泽"完成302门专业课智能化改造，获省级典型案例等5项认定。依托产教融合共同体辐射130余家单位，为旅游类专业深化大思政育人、推进数字化转型提供了可复制的实践范式。'
  ]
}

// ========== 左侧成果导览（来自申报书） ==========
export const leftSidebarItems = [
  { key: 'theory', label: '理论成果', icon: '/images/sidebar-icons/theory.webp' },
  { key: 'baize', label: '旅游职业教育大模型-白泽', icon: '/images/sidebar-icons/general-icon-1.webp' },
  { key: 'redBrand', label: '红色山东 行走课堂品牌活动', icon: '/images/sidebar-icons/general-icon-2.webp' },
  { key: 'problem', label: '成果解决的教学问题与方法', icon: '/images/sidebar-icons/problem.webp' },
  { key: 'innovation', label: '成果创新点', icon: '/images/sidebar-icons/innovation.webp' },
  { key: 'people', label: '成果完成人', icon: '/images/sidebar-icons/people.webp' },
  { key: 'organization', label: '成果完成单位', icon: '/images/sidebar-icons/organization.webp' }
]


// ========== 成果曾获奖励（来自申报书 表0 + 佐证材料） ==========
export const resultAwards = [
  { title: '基于职业能力进阶的酒店管理专业"六航程"校企协同育人研究与实践', level: '二等奖', year: '2022年8月', dept: '山东省教育厅', category: '教学成果奖' },
  { title: '"工匠精神"为内核的高职旅游类专业学生职业素养培育研究与实践', level: '一等奖', year: '2018年4月', dept: '山东省教育厅', category: '教学成果奖' },
  { title: '旅游管理专业群获评山东省职业教育高水平专业群', level: '省级', year: '2025年10月', dept: '山东省教育厅', category: '专业建设' },
  { title: '2022年获评山东省第二批高水平专业群', level: '省级', year: '2022年6月', dept: '山东省教育厅', category: '专业建设' },
  { title: '2019年获评山东省品牌专业群', level: '省级', year: '2019年8月', dept: '山东省教育厅', category: '专业建设' },
  { title: '2021年旅游管理专业获世界旅游组织专业认证（UNWTO TedQual）', level: '世界级', year: '2021年9月', dept: '世界旅游组织', category: '专业建设' },
  { title: '《四链合一，数值赋能：旅游专业群与区域产兴业协同发展的山旅实践》金专业典型案例', level: '省部级', year: '2025年8月', dept: '全国旅游教指委', category: '专业建设' },
  { title: '"红色山东·行走课堂"获评全省教育系统党建创新案例', level: '省级', year: '2025年1月', dept: '山东省教育厅', category: '党建获奖' },
  { title: '"红色山东·行走课堂"获得省直文旅优秀党建品牌', level: '省级', year: '2024年11月', dept: '山东省文化和旅游厅', category: '党建获奖' },
  { title: '山东省2024年度以革命文物为主题的"大思政课"优质资源建设推介项目', level: '省级', year: '2025年1月', dept: '山东省文化和旅游厅', category: '党建获奖' },
  { title: '亮相世界数字教育大会，入选《中国智慧教育发展报告》', level: '世界级', year: '2026年5月', dept: '中国教育科学研究院', category: '白泽大模型' },
  { title: '入选《山东省职业教育质量报告（2025年度）》"数字融教创新，精准赋能学习"主题案例', level: '省级', year: '2026年3月', dept: '山东省教育厅', category: '白泽大模型' },
  { title: '入选全省教育系统人工智能赋能教育典型案例', level: '省级', year: '2026年1月', dept: '山东省教育厅', category: '白泽大模型' },
  { title: '入选山东省文化创新创造案例', level: '省级', year: '2025年12月', dept: '山东省文化和旅游厅', category: '白泽大模型' },
  { title: '获评山东省视听应用推广工程典型案例', level: '二等奖', year: '2025年9月', dept: '山东省广播电视局、山东省教育厅', category: '白泽大模型' },
  { title: '山东省职业教育教学创新团队（旅游管理团队）', level: '省级', year: '2022年', dept: '山东省教育厅', category: '师资建设' },
  { title: '山东省职业教育黄大年式教学团队', level: '省级', year: '2023年6月', dept: '山东省教育厅', category: '师资建设' },
  { title: '山东省高校优秀辅导员（刘若轩）', level: '省级', year: '2024年', dept: '中共山东省委教育工委', category: '师资建设' },
  { title: '全国职业院校技能大赛先进个人', level: '国家级', year: '2022年9月', dept: '教育部', category: '师资建设' },
  { title: '山东学校优秀思政课教师（王伟亚）', level: '省级', year: '2021年', dept: '中共山东省委教育工委、山东省教育厅', category: '师资建设' },
  { title: '《旅游职业道德》（第四版）入选国家级规划教材', level: '国家级', year: '2023年7月', dept: '中国旅游出版社', category: '教材建设' },
  { title: '《旅行社运营实务》（第二版）', level: '国家级', year: '2025年3月', dept: '中国人民大学出版社', category: '教材建设' },
  { title: '《旅行社计调业务》（第五版）', level: '国家级', year: '2024年8月', dept: '旅游教育出版社', category: '教材建设' },
  { title: '《旅行社数字化运营实务》', level: '省级', year: '2024年8月', dept: '华中科技大学出版社', category: '教材建设' },
  { title: '世校赛金奖1项、银奖3项', level: '国家级', year: '2024、2025年', dept: '各级赛项组委会', category: '学生技能竞赛' },
  { title: '省级及国家级职业院校技能大赛获奖22项', level: '省级及国家级', year: '2018-2026年', dept: '各级赛项组委会', category: '学生技能竞赛' }
]


// ========== 学生获奖（来自佐证材料 三、育人成效显著） ==========
export const studentAwards = [
  { title: '2021年全国旅游院校技能大赛4项', year: '2021', note: '佐证材料（三）' },
  { title: '2021年全国职业院校技能大赛三等奖', year: '2021', note: '佐证材料（三）' },
  { title: '2021年山东省职业院校技能大赛两项一等奖', year: '2021', note: '佐证材料（三）' },
  { title: '2022年全国职业院校技能大赛两项一等奖', year: '2022', note: '佐证材料（三）' },
  { title: '2023年山东省职业院校技能大赛导游服务一等奖', year: '2023', note: '佐证材料（三）' },
  { title: '2023年全国职业院校技能大赛导游一等奖', year: '2023', note: '佐证材料（三）' },
  { title: '2024年全国旅游院校服务技能大赛4项（一等奖）', year: '2024', note: '佐证材料（三）' },
  { title: '世界职业院校技能大赛总决赛争夺赛铜牌', year: '2024', note: '佐证材料（三）' },
  { title: '2021年全国特级导游评选', year: '2021', note: '佐证材料（三）' },
  { title: '韩兆君入选全国优秀导游宣讲团', year: '', note: '佐证材料（三）' },
  { title: '系部学生参加中海经典诵读暨诗词大会获得双冠王', year: '', note: '佐证材料（三）' },
  { title: '我系在2025年红色山东 行走课堂赛事活动中斩获佳绩', year: '2025', note: '佐证材料（三）' },
  { title: '我系在山东省"技能兴鲁"文旅系统职业技能大赛（学生组）旅游咨询员赛项中喜获佳绩', year: '2025', note: '佐证材料（三）' },
  { title: '我系在山东省"技能兴鲁"文旅系统职业技能大赛（学生组）旅行社计调赛项中喜获佳绩', year: '2025', note: '佐证材料（三）' },
  { title: '我系在山东省"技能兴鲁"文旅系统职业技能大赛（学生组）研学指导师赛项中喜获佳绩', year: '2025', note: '佐证材料（三）' },
  { title: '我系在2025年山东旅游职业学院旅游大使赛事活动获得各项荣誉', year: '2025', note: '佐证材料（三）' },
  { title: '第二届山东省大学生职业规划大赛暨第二届全国大学生职业规划大赛山东省选拔赛铜奖', year: '2024', note: '佐证材料（三）' }
]

// ========== 推广应用（来自佐证材料 七、成果推广应用证明） ==========
export const promotions = [
  {
    name: '青岛旅游学校', type: '中职学校',
    desc: '我校与山东旅游职业学院已开展了十余年的旅游类专业中高职贯通人才培养实践。在合作育人过程中，我校系统学习并应用了本成果关于中高职贯通培养的设计方案与实践路径。成果中"红旅铸魂·数智赋能"的理念指导我们重新审视并优化了中职阶段的课程标准，确保其与高职能力要求有效对接。依托"教学协同"机制，我校与对口高职院校建立了常态化的教研交流与质量监控流程。这一系列举措打破了过去中高职衔接中的"壁垒"，使人才培养过程真正实现了一体化设计与分段有效实施，为学生构建了畅通的成长通道，也为广大中职学校探索高质量贯通培养提供了经过验证的、可复制的实施策略。经实践检验，我们认为，该成果理念先进、应用性强，具有良好的实践指导意义和推广价值。'
  },
  { name: '青岛酒店管理职业技术学院', type: '高职院校', desc: '应用本成果课程体系与"白泽"大模型教学经验，开展酒店管理专业数字化转型。' },
  { name: '嘉兴职业技术学院', type: '高职院校', desc: '借鉴"一核双线·三阶四融"课程体系，推动本校旅游类专业思政与专业融合。' },
  { name: '烟台临港工业学校', type: '中职学校', desc: '应用成果中关于中职—高职贯通的培养方案，开展导游实务等课程衔接教学。' },
  { name: '江苏天目湖旅游股份有限公司', type: '行业企业', desc: '应用"四堂协同"实践教学模式，共建校外实训基地，开展学生实战训练。' },
  { name: '郑州旅游职业学院', type: '高职院校', desc: '应用"白泽"大模型教学经验与"双环联动"实践教学体系，开展专业改革。' },
  { name: '桂林唐朝国际旅行社有限责任公司', type: '行业企业', desc: '应用成果中研学旅行课程设计方法，校企共建旅行社经营管理专业。' }
]

// ========== 媒体报道（来自媒体报道汇总33条.xlsx，仅含有效超链接） ==========
export const mediaReports = [
  { category: '红色行走课堂', level: '国家级', source: '中国青年报', title: '"打卡"红色景点，用脚步丈量祖国山河', url: 'http://zqb.cyol.com/html/2024-12/15/nw.D110000zgqnb_20241215_2-04.htm', date: '2024-12-15', note: '最核心佐证-国家级主流媒体' },
  { category: '红色行走课堂', level: '国家级平台', source: '中国教育在线', title: '"红色山东 行走课堂"表彰大会暨优秀作品展示', url: 'https://www.eol.cn/shandong/sdzy/202412/t20241212_2646152.shtml', date: '2024-12-12', note: '' },
  { category: '红色行走课堂', level: '省级主流', source: '新浪财经', title: '用好红色资源"润心铸魂" 推进"大思政课"提质增效', url: 'https://finance.sina.com.cn/jjxw/2024-11-13/doc-incvwrzr1433358.shtml', date: '2024-11-13', note: '' },
  { category: '红色行走课堂', level: '省级主流', source: '网易', title: '山东旅院举办"红色山东 行走课堂"表彰大会', url: 'https://www.163.com/dy/article/JJA752V10530WJIN.html', date: '2024-12-13', note: '' },
  { category: '红色行走课堂', level: '省级主流', source: '今日头条', title: '红色山东行走的思政课堂', url: 'https://www.toutiao.com/article/7456683040263701029/', date: '2025-01-06', note: '' },
  { category: '红色行走课堂', level: '省级主流', source: '搜狐', title: '探索红色山东:用脚步铭记历史的思政课堂', url: 'https://www.sohu.com/a/845846626_121924581', date: '2025-01-06', note: '' },
  { category: '红色行走课堂', level: '省级主流', source: '齐鲁网/闪电新闻', title: '探学文物专列，追寻红色印记（行走课堂系列活动）', url: 'https://so.html5.qq.com/page/real/search_news?docid=70000021_85269d3187f80952', date: '2026-04-06', note: '' },
  { category: '红色行走课堂', level: '省级主流', source: '齐鲁网/闪电新闻', title: '课堂"握手"文旅一线，技能"对话"市场需求', url: 'https://so.html5.qq.com/page/real/search_news?docid=70000021_66769f1b14599552', date: '2026-04-29', note: '' },
  { category: '红色行走课堂', level: '省级主流', source: '今日头条', title: '山东旅游职业学院:这堂思政课的坐标在行业一线', url: 'https://www.toutiao.com/article/7628081814392914458/', date: '2026-04-13', note: '' },
  { category: '白泽大模型', level: '省级主流', source: '齐鲁网', title: '亮相世界数字教育大会！"白泽"入选《中国智慧教育发展报告》', url: 'https://edu.iqilu.com/gxbk/gaoxiao/gxmz/20260515/5914242.shtml', date: '2026-05-15', note: '世界级成果' },
  { category: '白泽大模型', level: '省级主流', source: '腾讯网', title: '成功入选！山东文旅职业教育打造垂直大模型新标杆', url: 'https://so.html5.qq.com/page/real/search_news?docid=70000021_0796a05548b76352', date: '2026-05-14', note: '' },
  { category: '白泽大模型', level: '省级主流', source: '腾讯网', title: '旅游职业教育大模型"白泽"上岗', url: 'https://new.qq.com/rain/a/20251122A02UPR00', date: '2025-11-22', note: '' },
  { category: '白泽大模型', level: '国家级平台', source: '中国教育在线', title: '本地化部署DeepSeek！"白泽"大模型发布上岗', url: 'https://shandong.eol.cn/sdzy/202502/t20250224_2655747.shtml', date: '2025-02-24', note: '' },
  { category: '白泽大模型', level: '央媒', source: '国际在线（央广网）', title: '山东旅院实现DeepSeek全流程本地化应用', url: 'https://sd.cri.cn/20250226/afdca123-b732-1e51-1007-77c4b43aaf77.html', date: '2025-02-26', note: '' },
  { category: '白泽大模型', level: '省级主流', source: '搜狐', title: 'AI赋能文旅职业教育：山东旅院开创行业新纪元', url: 'https://www.sohu.com/a/864072008_122006510', date: '2025-02-26', note: '' },
  { category: '白泽大模型', level: '省级主流', source: '新浪财经', title: '旅游职业学院大模型问世，"震感"明显', url: 'https://t.cj.sina.com.cn/articles/view/3903034300/e8a393bc00101fmri', date: '2025-03-06', note: '' },
  { category: '白泽大模型', level: '省级主流', source: '网易', title: '重磅！本地化部署DeepSeek！"白泽"大模型发布上岗', url: 'https://www.163.com/dy/article/JPNB3AFV0524BKEM.html', date: '2025-03-03', note: '' },
  { category: '技能大赛', level: '国家级平台', source: '中国教育在线', title: '世校赛落幕，山旅喜获旅游赛道"一金两银"', url: 'https://shandong.eol.cn/sdzy/202411/t20241104_2640158.shtml', date: '2024-11-04', note: '国家级赛事' },
  { category: '技能大赛', level: '省级主流', source: '今日头条/大众日报', title: '实现金牌零突破！一金两银好成绩', url: 'https://www.toutiao.com/article/7434068600950702592/', date: '2024-11-06', note: '' },
  { category: '技能大赛', level: '校级', source: '学院官网', title: '导游服务小组获银奖（世校赛）', url: 'http://www.sdts.net.cn/contents/55/95390.html', date: '2024-11-04', note: '' },
  { category: '技能大赛', level: '国家级平台', source: '中国教育在线', title: '2023年全国职业院校技能大赛酒店服务赛项一等奖', url: 'https://shandong.eol.cn/sdzy/202309/t20230922_2495531.shtml', date: '2023-09-22', note: '' },
  { category: 'UNWTO认证与专业群', level: '省级主流', source: '新浪财经/齐鲁壹点', title: '招生报道（5个专业通过UNWTO认证-山东首个）', url: 'https://finance.sina.com.cn/jjxw/2024-07-20/doc-incetiyn4919904.shtml', date: '2024-07-20', note: '' },
  { category: 'UNWTO认证与专业群', level: '教育部平台', source: '神州学人网', title: '50余名媒体记者走进"山旅"', url: 'http://www.chisa.edu.cn/general/202306/t20230613_2111055506.html', date: '2023-06-13', note: '' },
  { category: 'UNWTO认证与专业群', level: '省级主流', source: '齐鲁壹点', title: '旅游与休闲管理系招生简章（UNWTO+高水平专业群）', url: 'https://www.ql1d.com/general/21745077.html', date: '2023-07-05', note: '' },
  { category: 'UNWTO认证与专业群', level: '国家级平台', source: '中国教育在线', title: '专业解析山东旅游职业学院旅游管理专业', url: 'https://shandong.eol.cn/yuanxiaochuanzhen/202005/t20200506_1725296.shtml', date: '2020-05-06', note: '' },
  { category: '党建与产教融合', level: '校级', source: '学院官网', title: '"红色山东 行走课堂"入选全省教育系统党建创新案例', url: 'http://www.sdts.net.cn/contents/55/95572.html', date: '2025-01-11', note: '' }
]

// ========== 其他佐证（来自佐证材料 全篇 + 16个PDF文件） ==========
// ========== 理论成果数据 ==========
// 以下各数组保留结构，具体内容由用户替换
export const theoryProjects = [
  { id: 'tp1', title: '（待补充项目名称一）', source: '（待补充）', year: '（待补充）', status: '（待补充）', detail: '（待补充项目简介）' },
  { id: 'tp2', title: '（待补充项目名称二）', source: '（待补充）', year: '（待补充）', status: '（待补充）', detail: '（待补充项目简介）' }
]

export const theoryPapers = [
  { id: 'pa1', title: '（待补充论文题目一）', authors: '（待补充）', journal: '（待补充）', year: '（待补充）', detail: '（待补充论文摘要）' },
  { id: 'pa2', title: '（待补充论文题目二）', authors: '（待补充）', journal: '（待补充）', year: '（待补充）', detail: '（待补充论文摘要）' },
  { id: 'pa3', title: '（待补充论文题目三）', authors: '（待补充）', journal: '（待补充）', year: '（待补充）', detail: '（待补充论文摘要）' }
]

export const theoryTextbooks = [
  { id: 'tb1', title: '（待补充教材名称一）', publisher: '（待补充）', year: '（待补充）', level: '（待补充）' },
  { id: 'tb2', title: '（待补充教材名称二）', publisher: '（待补充）', year: '（待补充）', level: '（待补充）' },
  { id: 'tb3', title: '（待补充教材名称三）', publisher: '（待补充）', year: '（待补充）', level: '（待补充）' }
]

export const theoryCategories = [
  { key: 'projects', label: '省级教改课题', items: theoryProjects },
  { key: 'papers',   label: '学术论文',     items: theoryPapers },
  { key: 'textbooks',label: '出版教材',     items: theoryTextbooks }
]

export const evidencePDFs = [
  { key: 'case1', label: '案例1：行走课堂·数智铸魂：旅游类专业"红色山东"思政育人创新实践' },
  { key: 'case2', label: '案例2：校企协三方联动：创新"师带徒"协同育人机制实践' },
  { key: 'case3', label: '案例3：标准引领·产教适配：牵头开发省级旅游类专业教学指导方案的创新实践' },
  { key: 'case4', label: '案例4：双元三融·数智赋能：人工智能一流核心课程建设探索与实践' },
  { key: 'case5', label: '案例5：活页模块·数智融合：《人工智能应用基础》新形态教材开发实践' },
  { key: 'case6', label: '案例6：行业深耕·教学反哺：双师型教师韩兆君"产教双向赋能"成长案例' },
  { key: 'case7', label: '案例7：基地共建·实战育人："途牛—山旅"旅游直播产教融合实训基地建设案例' },
  { key: 'case8', label: '案例8：白泽赋能·生态重构：旅游职业教育"AI+教学"数字化新生态构建实践' },
  { key: 'case9', label: '案例9：留学山旅·中蒙共育："一带一路"背景下旅游类国际化人才培养创新实践' },
  { key: 'cooperation', label: '创新校企合作机制' },
  { key: 'base', label: '建设产教融合实训基地' },
  { key: 'teacher', label: '师资队伍建设' },
  { key: 'textbook', label: '出版教材著作和论文' },
  { key: 'project', label: '社会服务' },
  { key: 'award2025', label: '2025年度优秀理事单位匾额' }
]

