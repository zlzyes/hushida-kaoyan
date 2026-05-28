var MockExamsData = {
  categories: [
  {
    "id": "101",
    "label": "101 思想政治理论",
    "abbr": "政治",
    "icon": "🇨🇳",
    "desc": "全国统考 · 单选+多选+分析题"
  },
  {
    "id": "201",
    "label": "201 英语（一）",
    "abbr": "英语",
    "icon": "🇬🇧",
    "desc": "全国统考 · 完形+阅读+翻译+写作"
  },
  {
    "id": "796",
    "label": "796 马克思主义基本原理",
    "abbr": "马原",
    "icon": "📘",
    "desc": "湖师大自命题 · 名词解释+简答+论述"
  },
  {
    "id": "896",
    "label": "896 毛中特概论",
    "abbr": "毛概习思",
    "icon": "📙",
    "desc": "湖师大自命题 · 名词解释+简答+论述"
  }
],
  allPapers: [
  {
    "id": "my-1",
    "category": "796",
    "order": 1,
    "title": "马原模拟卷（一）· 基础摸底",
    "difficulty": "基础",
    "duration": 180,
    "totalScore": 150,
    "focus": "唯物论、辩证法、认识论基础概念",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "哲学基本问题",
        "referenceAnswer": "哲学基本问题包括两个方面：第一方面，思维与存在何者为第一性，划分唯物主义和唯心主义；第二方面，思维能否认识存在，划分可知论和不可知论。",
        "tags": [
          "唯物论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "矛盾的同一性",
        "referenceAnswer": "矛盾双方相互依存、相互贯通的性质和趋势。同一性是相对的、有条件的。",
        "tags": [
          "唯物辩证法"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "实践",
        "referenceAnswer": "人类能动地改造世界的社会性物质活动，具有客观实在性、自觉能动性和社会历史性三个基本特征。",
        "tags": [
          "认识论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "价值",
        "referenceAnswer": "在实践基础上形成的主体和客体之间的意义关系，具有客观性、主体性、社会历史性和多维性。",
        "tags": [
          "认识论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述物质与运动的辩证关系。",
        "referenceAnswer": "（1）运动是物质的根本属性和存在方式。（2）物质是运动的主体。（3）运动是绝对的，静止是相对的。（4）要求用运动的观点看问题，同时承认相对静止。",
        "tags": [
          "唯物论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述实践是检验真理的唯一标准。",
        "referenceAnswer": "（1）真理本性是主客观相符合。（2）实践是主观见之于客观的活动，具有直接现实性。（3）实践标准是确定性与不确定性的统一。",
        "tags": [
          "认识论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "简述联系的含义及基本特征。",
        "referenceAnswer": "联系是事物之间相互影响、相互制约和相互作用的关系。四个特征：客观性、普遍性、多样性、条件性。",
        "tags": [
          "唯物辩证法"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "运用矛盾普遍性与特殊性辩证关系原理，论述具体问题具体分析的方法论意义。",
        "referenceAnswer": "一、原理：矛盾普遍性寓于特殊性之中。二、具体问题具体分析是马克思主义活的灵魂。三、运用：从中国国情出发，因地制宜。四、反对教条主义和经验主义。",
        "tags": [
          "唯物辩证法",
          "方法论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "my-2",
    "category": "796",
    "order": 2,
    "title": "马原模拟卷（二）· 政治经济学入门",
    "difficulty": "基础+",
    "duration": 180,
    "totalScore": 150,
    "focus": "劳动价值论、剩余价值论基础",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "商品的二因素",
        "referenceAnswer": "使用价值（自然属性）+价值（社会属性）。使用价值是价值的物质承担者。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "抽象劳动",
        "referenceAnswer": "撇开具体形式的无差别一般人类劳动，形成商品价值。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "剩余价值率",
        "referenceAnswer": "剩余价值与可变资本的比率，m’=m/v，反映剥削程度。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "社会必要劳动时间",
        "referenceAnswer": "在现有社会正常生产条件下、社会平均劳动熟练程度和强度下制造某种使用价值所需的时间。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述劳动二重性理论及其意义。",
        "referenceAnswer": "具体劳动创造使用价值，抽象劳动形成价值。意义：理解政治经济学的枢纽，为劳动价值论和剩余价值论奠定基础。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述价值规律的内容及作用。",
        "referenceAnswer": "内容：商品价值量由社会必要劳动时间决定，等价交换。作用：调节资源配置、刺激生产力发展、引起两极分化。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "简述劳动力商品的价值和使用价值。",
        "referenceAnswer": "价值由生产所需生活资料价值决定。使用价值：劳动，能创造比自身价值更大的价值——剩余价值的源泉。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "试论资本主义生产过程的二重性。",
        "referenceAnswer": "资本主义生产过程是劳动过程与价值增殖过程的统一。劳动过程是手段，价值增殖是目的。揭示了剩余价值的真正来源——雇佣工人的剩余劳动。",
        "tags": [
          "政治经济学",
          "剩余价值论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "my-3",
    "category": "796",
    "order": 3,
    "title": "马原模拟卷（三）· 唯物史观+综合",
    "difficulty": "中等",
    "duration": 180,
    "totalScore": 150,
    "focus": "唯物史观核心概念、跨章节综合题",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "社会存在",
        "referenceAnswer": "社会生活的物质方面，物质生产方式是决定力量。",
        "tags": [
          "唯物史观"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "经济基础",
        "referenceAnswer": "由一定发展阶段生产力所决定的生产关系总和。",
        "tags": [
          "唯物史观"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "资本有机构成",
        "referenceAnswer": "c:v，随技术进步不断提高导致相对过剩人口。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "扬弃",
        "referenceAnswer": "辩证否定的实质，既克服又保留、既批判又继承。",
        "tags": [
          "唯物辩证法"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述生产力与生产关系的辩证关系。",
        "referenceAnswer": "（1）生产力决定生产关系。（2）生产关系反作用于生产力。（3）二者矛盾是社会发展的根本动力。",
        "tags": [
          "唯物史观"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述真理的绝对性与相对性。",
        "referenceAnswer": "绝对性：包含客观内容。相对性：只是对世界一定范围和程度的正确反映。绝对寓于相对之中。",
        "tags": [
          "认识论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "简述人民群众在历史中的作用。",
        "referenceAnswer": "社会物质财富和精神财富的创造者，社会变革的决定力量。坚持群众史观。",
        "tags": [
          "唯物史观"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "论述真理与价值的辩证统一关系。",
        "referenceAnswer": "一、真理原则按规律办事，价值原则满足人的需要。二、统一于社会实践。三、绿水青山就是金山银山体现二者统一。四、反对割裂。",
        "tags": [
          "认识论",
          "综合"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "my-4",
    "category": "796",
    "order": 4,
    "title": "马原模拟卷（四）· 资本主义专题深化",
    "difficulty": "中等+",
    "duration": 180,
    "totalScore": 150,
    "focus": "资本主义本质规律、垄断资本主义",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "不变资本与可变资本",
        "referenceAnswer": "c只转移价值，v创造新价值+剩余价值。划分意义：揭示剩余价值真正来源。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "垄断",
        "referenceAnswer": "少数大企业操纵控制生产和市场，是帝国主义最本质的经济特征。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "金融资本",
        "referenceAnswer": "工业垄断资本和银行垄断资本融合生长的新型资本。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "资本主义基本矛盾",
        "referenceAnswer": "生产社会化与生产资料资本主义私人占有的矛盾，一切危机的总根源。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述绝对和相对剩余价值的区别。",
        "referenceAnswer": "绝对：延长工作日。相对：提高劳动生产率缩短必要劳动时间。早期以绝对为主，后来以相对为主。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述资本积累的实质及后果。",
        "referenceAnswer": "实质：剩余价值资本化。后果：财富积累+贫困积累，相对过剩人口增加。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "简述经济全球化的双重影响。",
        "referenceAnswer": "积极：发展机遇、引进资金技术。消极：加剧不平等、经济风险增加。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "论述当代资本主义新变化及实质。",
        "referenceAnswer": "一、表现：法人资本、福利制度、国家干预。二、根源：生产力发展、工人斗争。三、实质未变：私有制仍是基础，剥削依然存在。",
        "tags": [
          "政治经济学",
          "当代资本主义"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "my-5",
    "category": "796",
    "order": 5,
    "title": "马原模拟卷（五）· 全真综合模拟",
    "difficulty": "较难",
    "duration": 180,
    "totalScore": 150,
    "focus": "全七章综合，跨章节论述",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "度",
        "referenceAnswer": "保持事物的质的稳定性的数量界限。超出度发生质变。",
        "tags": [
          "唯物辩证法"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "感性认识",
        "referenceAnswer": "认识的初级阶段，通过感官直接感受到的事物现象。是理性认识的基础。",
        "tags": [
          "认识论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "国家垄断资本主义",
        "referenceAnswer": "国家与私人垄断资本结合，垄断资本利用国家政权获取高额利润。",
        "tags": [
          "政治经济学"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "共产主义",
        "referenceAnswer": "物质财富极大丰富、按需分配；每个人自由而全面的发展。",
        "tags": [
          "科学社会主义"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述量变和质变的辩证关系。",
        "referenceAnswer": "量变是质变的必要准备，质变是量变的必然结果，二者相互渗透。重视积累，抓住时机。",
        "tags": [
          "唯物辩证法"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述社会意识的相对独立性。",
        "referenceAnswer": "与社会存在发展不完全同步，具有历史继承性，最突出表现是对社会存在有能动的反作用。",
        "tags": [
          "唯物史观"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "为什么社会主义首先在落后国家胜利？",
        "referenceAnswer": "帝国主义政治经济发展不平衡、社会矛盾尖锐、有无产阶级政党领导。",
        "tags": [
          "科学社会主义"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "运用三大规律论述新时代的历史必然性。",
        "referenceAnswer": "对立统一：主要矛盾转化。量变质变：40年量变→部分质变。否定之否定：确立→改革→新时代完善，螺旋式上升。",
        "tags": [
          "唯物辩证法",
          "综合"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "mg-1",
    "category": "896",
    "order": 1,
    "title": "毛概+习思模拟卷（一）· 基础概念",
    "difficulty": "基础",
    "duration": 180,
    "totalScore": 150,
    "focus": "毛泽东思想、新民主主义革命",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "毛泽东思想活的灵魂",
        "referenceAnswer": "实事求是、群众路线、独立自主三个基本方面。",
        "tags": [
          "毛泽东思想"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "新民主主义革命总路线",
        "referenceAnswer": "无产阶级领导的，人民大众的，反对帝、封、官的革命。",
        "tags": [
          "新民主主义革命"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "社会主义初级阶段",
        "referenceAnswer": "特指我国在生产力落后条件下建设社会主义的特定阶段。两层含义。",
        "tags": [
          "邓小平理论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "两个确立",
        "referenceAnswer": "确立习近平同志核心地位，确立新思想指导地位。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述新民主主义革命三大法宝。",
        "referenceAnswer": "统一战线、武装斗争、党的建设。党的建设是核心。",
        "tags": [
          "新民主主义革命"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述社会主义本质论。",
        "referenceAnswer": "解放和发展生产力，消灭剥削，消除两极分化，最终达到共同富裕。",
        "tags": [
          "邓小平理论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "简述马克思主义中国化三次飞跃。",
        "referenceAnswer": "毛泽东思想→中国特色社会主义理论体系→习近平新时代中国特色社会主义思想。",
        "tags": [
          "马克思主义中国化"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "论述中国式现代化的五个中国特色。",
        "referenceAnswer": "人口规模巨大、共同富裕、两个文明协调、人与自然和谐、和平发展。打破现代化=西方化迷思，创造人类文明新形态。",
        "tags": [
          "中国式现代化"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "mg-2",
    "category": "896",
    "order": 2,
    "title": "毛概+习思模拟卷（二）· 新时代专题",
    "difficulty": "中等",
    "duration": 180,
    "totalScore": 150,
    "focus": "十个明确、十四个坚持核心内容",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "全过程人民民主",
        "referenceAnswer": "全链条全方位全覆盖的民主，最广泛最真实最管用。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "新发展理念",
        "referenceAnswer": "创新、协调、绿色、开放、共享。创新是第一动力，共享是本质要求。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "人类命运共同体",
        "referenceAnswer": "建设持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "总体国家安全观",
        "referenceAnswer": "以人民安全为宗旨、政治安全为根本、经济安全为基础。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述全面深化改革总目标。",
        "referenceAnswer": "完善和发展中国特色社会主义制度，推进国家治理体系和治理能力现代化。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述两个结合的内涵和意义。",
        "referenceAnswer": "马克思主义同中国具体实际结合、同中华优秀传统文化结合。第二个结合是又一次思想解放。",
        "tags": [
          "马克思主义中国化"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "简述全面从严治党。",
        "referenceAnswer": "以政治建设为统领，推进四个自我。反腐败永远在路上。",
        "tags": [
          "党的建设"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "结合五位一体论述社会主义现代化强国战略。",
        "referenceAnswer": "经济高质量发展、政治全过程民主、文化自信、社会民生福祉、生态绿水青山。2035→本世纪中叶分两步。",
        "tags": [
          "五位一体",
          "综合"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "mg-3",
    "category": "896",
    "order": 3,
    "title": "毛概+习思模拟卷（三）· 综合提升",
    "difficulty": "中等+",
    "duration": 180,
    "totalScore": 150,
    "focus": "跨板块综合，历史与现实贯通",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "群众路线",
        "referenceAnswer": "一切为了群众，一切依靠群众，从群众中来到群众中去。",
        "tags": [
          "毛泽东思想"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "社会主义市场经济",
        "referenceAnswer": "市场起决定性作用，更好发挥政府作用。",
        "tags": [
          "邓小平理论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "新发展格局",
        "referenceAnswer": "以国内大循环为主体、国内国际双循环相互促进。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "自我革命",
        "referenceAnswer": "跳出历史周期率的第二个答案，四个自我。",
        "tags": [
          "党的建设"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述一个中心两个基本点到五位一体的发展脉络。",
        "referenceAnswer": "从以经济建设为中心到五位一体全面协调，反映了认识深化。",
        "tags": [
          "综合"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述四个自信及其逻辑。",
        "referenceAnswer": "道路是途径、理论是指南、制度是保障、文化是支撑。文化自信更基本更深沉。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "简述社会主要矛盾三次表述及变化逻辑。",
        "referenceAnswer": "物质文化vs落后生产→美好生活vs不平衡不充分。需求升级，问题从总量转向结构质量。",
        "tags": [
          "综合"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "论述党为什么能、马克思主义为什么行、中国特色社会主义为什么好。",
        "referenceAnswer": "党：以人民为中心、自我革命。马克思主义：揭示规律、与时俱进。中国特色社会主义：符合国情、创造两大奇迹。三者统一于民族复兴。",
        "tags": [
          "综合"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "mg-4",
    "category": "896",
    "order": 4,
    "title": "毛概+习思模拟卷（四）· 改革开放与市场经济",
    "difficulty": "中等+",
    "duration": 180,
    "totalScore": 150,
    "focus": "改革开放理论、市场经济、高质量发展",
    "questions": [
      {
        "id": 1,
        "type": "名词解释",
        "score": 5,
        "question": "一个中心两个基本点",
        "referenceAnswer": "以经济建设为中心，坚持四项基本原则，坚持改革开放。",
        "tags": [
          "邓小平理论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "名词解释",
        "score": 5,
        "question": "高质量发展",
        "referenceAnswer": "全面建设社会主义现代化国家的首要任务，体现新发展理念。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "名词解释",
        "score": 5,
        "question": "四个全面",
        "referenceAnswer": "全面建设现代化国家（目标）+三个战略举措。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "名词解释",
        "score": 5,
        "question": "共同富裕",
        "referenceAnswer": "中国特色社会主义的本质要求，不是整齐划一的平均主义。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "简答题",
        "score": 10,
        "question": "简述邓小平三步走战略。",
        "referenceAnswer": "1981-1990翻一番温饱→1991-2000再翻一番小康→21世纪中叶基本现代化。",
        "tags": [
          "邓小平理论"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "简答题",
        "score": 10,
        "question": "简述绿水青山就是金山银山的深刻内涵。",
        "referenceAnswer": "经济与生态辩证统一。绿水青山可转化为金山银山。保护生态就是保护生产力。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "简答题",
        "score": 10,
        "question": "简述新时代党的建设总要求。",
        "referenceAnswer": "以政治建设为统领，全面推进各项建设，把制度建设贯穿其中。",
        "tags": [
          "党的建设"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "论述题",
        "score": 20,
        "question": "论述改革发展稳定三者关系。",
        "referenceAnswer": "改革是动力、发展是目的、稳定是前提。把改革力度、发展速度和社会可承受程度统一起来。",
        "tags": [
          "改革开放",
          "综合"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "en-1",
    "category": "201",
    "order": 1,
    "title": "英语模拟卷（一）· 阅读+翻译+小作文",
    "difficulty": "基础",
    "duration": 120,
    "totalScore": 100,
    "focus": "阅读理解+翻译+小作文",
    "questions": [
      {
        "id": 1,
        "type": "阅读理解",
        "score": 20,
        "question": "【Text 1】Read the passage and answer: What is the main idea?\n\nIn recent years, the study of Marxism has gained renewed attention among young Chinese scholars. Unlike their predecessors who may have viewed it as a mere political requirement, today’s students are discovering the intellectual rigor and contemporary relevance of Marxist philosophy.",
        "referenceAnswer": "Main idea: Renewed interest in Marxism among young Chinese scholars, noting its contemporary relevance to modern challenges. Key points: 1. Marxism gaining renewed attention 2. Students find intellectual value 3. Marxism seen as relevant.",
        "tags": [
          "阅读理解"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "翻译",
        "score": 15,
        "question": "Translate into Chinese:\n\nThe fundamental contradiction of capitalism lies in the conflict between socialized production and private ownership of the means of production.",
        "referenceAnswer": "资本主义的基本矛盾在于生产社会化与生产资料私人占有之间的冲突。",
        "tags": [
          "翻译"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "写作",
        "score": 25,
        "question": "【小作文】Write a letter of about 100 words recommending a book on Marxism to a friend.",
        "referenceAnswer": "Dear friend,\n\nI’m writing to recommend a book that helped me greatly — ‘Introduction to Marxist Philosophy’.\n\nThis book systematically explains the core concepts of Marxist philosophy with real-world examples.\n\nI recommend it because it transformed my approach — instead of rote memorization, I now understand the logical connections between theories.\n\nHope you find it helpful!\n\nBest,\n[Name]",
        "tags": [
          "写作"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "en-2",
    "category": "201",
    "order": 2,
    "title": "英语模拟卷（二）· 阅读+翻译+大作文",
    "difficulty": "中等",
    "duration": 120,
    "totalScore": 100,
    "focus": "阅读理解+翻译+大作文",
    "questions": [
      {
        "id": 1,
        "type": "阅读理解",
        "score": 20,
        "question": "【Text 1】According to the author, what is the significance of dialectical thinking?\n\nDialectical thinking represents a fundamental departure from static approaches to understanding reality. Rather than viewing things as fixed, dialectics emphasizes interconnection, contradiction, and development.",
        "referenceAnswer": "1. Departs from static approaches 2. Emphasizes interconnection, contradiction, and development 3. Reveals internal contradictions driving historical development.",
        "tags": [
          "阅读理解"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "翻译",
        "score": 15,
        "question": "Translate: The concept of Chinese-style modernization reflects a profound understanding that modernization does not follow a single path.",
        "referenceAnswer": "中国式现代化的概念反映了对现代化并非只有一条道路的深刻理解。",
        "tags": [
          "翻译"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "写作",
        "score": 25,
        "question": "【大作文】Write 160-200 words: Some people believe traditional theories like Marxism are no longer relevant in the technology-driven world. What is your opinion?",
        "referenceAnswer": "In an era of rapid technological advancement, some question Marxism’s relevance. However, I believe it remains profoundly relevant. Firstly, Marxism provides unmatched tools for understanding inequality. Secondly, dialectics teaches us to see interconnection. Moreover, Marxism’s emphasis on praxis reminds us knowledge should serve human well-being. In conclusion, Marxism’s critical method makes it invaluable.",
        "tags": [
          "写作"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "en-3",
    "category": "201",
    "order": 3,
    "title": "英语模拟卷（三）· 阅读+翻译+大作文进阶",
    "difficulty": "中等+",
    "duration": 120,
    "totalScore": 100,
    "focus": "阅读理解+翻译+大作文",
    "questions": [
      {
        "id": 1,
        "type": "阅读理解",
        "score": 25,
        "question": "【Text 1】Read and summarize: Despite being developed in the 19th century, Marxism continues to provide insights into contemporary issues. Its analysis of capital accumulation explains growing inequality. The concept of alienation resonates with modern gig economy concerns.",
        "referenceAnswer": "1. Capital accumulation analysis explains inequality 2. Alienation concept resonates with gig economy 3. Ecological insights anticipate environmental crises 4. Requires adaptation, not dogmatic application.",
        "tags": [
          "阅读理解"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "翻译",
        "score": 15,
        "question": "Translate: Historical materialism holds that the mode of production conditions the general process of social, political and intellectual life. It is not consciousness that determines existence, but social existence that determines consciousness.",
        "referenceAnswer": "历史唯物主义认为，生产方式制约着整个社会生活、政治生活和精神生活的过程。不是意识决定存在，而是社会存在决定意识。",
        "tags": [
          "翻译"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "写作",
        "score": 25,
        "question": "【大作文】Write 160-200 words on: The importance of critical thinking in graduate education.",
        "referenceAnswer": "Critical thinking is the most essential skill graduate education cultivates. Firstly, it enables identifying gaps in existing knowledge. Secondly, in an era of information overload, it distinguishes credible sources. Furthermore, it fosters intellectual humility. In conclusion, critical thinking transforms students from passive recipients into active creators.",
        "tags": [
          "写作"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "po-1",
    "category": "101",
    "order": 1,
    "title": "政治模拟卷（一）· 选择题专练",
    "difficulty": "基础",
    "duration": 90,
    "totalScore": 50,
    "focus": "马原+史纲单选多选+分析题",
    "questions": [
      {
        "id": 1,
        "type": "单选题",
        "score": 1,
        "question": "马克思主义哲学区别于其他哲学的最显著特征是（  ）\nA.科学性 B.革命性 C.实践性 D.阶级性",
        "referenceAnswer": "C。实践性是马克思主义哲学区别于其他哲学的最显著特征。",
        "tags": [
          "马原"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "单选题",
        "score": 1,
        "question": "唯物辩证法的实质与核心是（  ）\nA.质量互变规律 B.对立统一规律 C.否定之否定规律 D.联系和发展的观点",
        "referenceAnswer": "B。对立统一规律揭示了事物发展的根本动力。",
        "tags": [
          "马原"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "单选题",
        "score": 1,
        "question": "商品价值量由（  ）决定。\nA.个别劳动时间 B.社会必要劳动时间 C.使用价值 D.供求关系",
        "referenceAnswer": "B。商品价值量由社会必要劳动时间决定。",
        "tags": [
          "马原"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "多选题",
        "score": 2,
        "question": "以下属于毛泽东思想活的灵魂的是（  ）\nA.实事求是 B.群众路线 C.独立自主 D.艰苦奋斗",
        "referenceAnswer": "ABC。毛泽东思想活的灵魂包括实事求是、群众路线和独立自主。",
        "tags": [
          "毛概"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "多选题",
        "score": 2,
        "question": "以下属于中国式现代化中国特色的是（  ）\nA.人口规模巨大 B.共同富裕 C.两个文明协调 D.走扩张殖民道路",
        "referenceAnswer": "ABC。中国式现代化走和平发展道路，D错误。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "多选题",
        "score": 2,
        "question": "关于真理表述正确的有（  ）\nA.内容客观 B.绝对性和相对性统一 C.实践是检验标准 D.多数人同意的就是真理",
        "referenceAnswer": "ABC。D错误——真理不由多数人决定。",
        "tags": [
          "马原"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "单选题",
        "score": 1,
        "question": "邓小平理论的根本问题是（  ）\nA.建设什么样的党 B.什么是社会主义怎样建设 C.实现什么样的发展 D.坚持和发展中国特色社会主义",
        "referenceAnswer": "B。邓小平理论围绕什么是社会主义、怎样建设社会主义展开。",
        "tags": [
          "毛概"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "多选题",
        "score": 2,
        "question": "新发展理念包括（  ）\nA.创新 B.协调 C.绿色 D.开放 E.共享",
        "referenceAnswer": "ABCDE。创新、协调、绿色、开放、共享。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 9,
        "type": "单选题",
        "score": 1,
        "question": "第一个不平等条约是（  ）\nA.北京条约 B.南京条约 C.马关条约 D.辛丑条约",
        "referenceAnswer": "B。1842年《南京条约》。",
        "tags": [
          "史纲"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 10,
        "type": "单选题",
        "score": 1,
        "question": "五四运动标志着（  ）\nA.旧民主主义革命开端 B.新民主主义革命开端 C.社会主义革命开始 D.改革开放开始",
        "referenceAnswer": "B。1919年五四运动标志新民主主义革命开端。",
        "tags": [
          "史纲"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 11,
        "type": "分析题",
        "score": 15,
        "question": "运用矛盾的普遍性与特殊性辩证关系原理分析中国式现代化的哲学基础。",
        "referenceAnswer": "（1）普遍性寓于特殊性中。（2）现代化有共同特征。（3）中国式现代化有五个中国特色。（4）在普遍规律基础上从国情出发，实现共性与个性统一。",
        "tags": [
          "马原+习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 12,
        "type": "分析题",
        "score": 15,
        "question": "结合绿水青山就是金山银山，论述真理与价值的辩证统一。",
        "referenceAnswer": "（1）真理尺度遵循规律，价值尺度满足需要。（2）绿水青山体现真理——尊重生态规律。（3）体现价值——满足人民美好生活需要。（4）二者统一于生态文明实践。",
        "tags": [
          "马原+习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "po-2",
    "category": "101",
    "order": 2,
    "title": "政治模拟卷（二）· 毛中特+习思专题",
    "difficulty": "中等",
    "duration": 90,
    "totalScore": 50,
    "focus": "毛中特+习思单选多选+分析题",
    "questions": [
      {
        "id": 1,
        "type": "单选题",
        "score": 1,
        "question": "新时代我国社会主要矛盾是（  ）\nA.阶级矛盾 B.美好生活和不平衡不充分 C.生产力与生产关系 D.公有制与私有制",
        "referenceAnswer": "B。人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "单选题",
        "score": 1,
        "question": "全面深化改革总目标是（  ）\nA.共同富裕 B.完善制度推进治理现代化 C.现代化经济体系 D.全面小康",
        "referenceAnswer": "B。完善和发展制度，推进治理现代化。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "单选题",
        "score": 1,
        "question": "社会主义核心价值观个人层面是（  ）\nA.富强民主文明和谐 B.自由平等公正法治 C.爱国敬业诚信友善 D.创新协调绿色开放共享",
        "referenceAnswer": "C。A国家层面，B社会层面，D新发展理念。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "多选题",
        "score": 2,
        "question": "两个确立是指（  ）\nA.习近平同志核心地位 B.新思想指导地位 C.确立改革开放 D.确立初级阶段",
        "referenceAnswer": "AB。确立习近平核心地位，确立新思想指导地位。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "多选题",
        "score": 2,
        "question": "四个自信包括（  ）\nA.道路自信 B.理论自信 C.制度自信 D.文化自信 E.军事自信",
        "referenceAnswer": "ABCD。道路、理论、制度、文化四个自信。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "多选题",
        "score": 2,
        "question": "我国基本政治制度包括（  ）\nA.人民代表大会制度 B.多党合作和政治协商 C.民族区域自治 D.基层群众自治",
        "referenceAnswer": "BCD。A是根本政治制度，BCD是基本政治制度。",
        "tags": [
          "毛概"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "单选题",
        "score": 1,
        "question": "新民主主义革命道路是（  ）\nA.城市包围农村 B.农村包围城市武装夺取政权 C.议会斗争 D.和平过渡",
        "referenceAnswer": "B。农村包围城市、武装夺取政权。",
        "tags": [
          "毛概"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "多选题",
        "score": 2,
        "question": "关于一国两制正确的有（  ）\nA.是伟大创举 B.必须全面准确贯彻 C.保持港澳繁荣稳定 D.放弃中央全面管治权",
        "referenceAnswer": "ABC。中央对特区拥有全面管治权，D错误。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 9,
        "type": "单选题",
        "score": 1,
        "question": "十四五时期经济社会发展主题是（  ）\nA.高速增长 B.高质量发展 C.扩大出口 D.城市扩张",
        "referenceAnswer": "B。高质量发展是十四五乃至更长时期的主题。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 10,
        "type": "多选题",
        "score": 2,
        "question": "关于共同富裕正确的有（  ）\nA.全体人民共同富裕 B.先富带动后富 C.是整齐划一平均主义 D.是社会主义本质要求",
        "referenceAnswer": "ABD。共同富裕不是整齐划一的平均主义，C错误。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 11,
        "type": "分析题",
        "score": 15,
        "question": "结合马克思关于科技是生产力的原理，论述教育科技人才三位一体的战略意义。",
        "referenceAnswer": "（1）科技是第一生产力。（2）人才是第一资源。（3）教育是培养人才的根本途径。（4）三位一体形成良性循环。（5）科技自立自强是战略支撑。",
        "tags": [
          "马原+习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 12,
        "type": "分析题",
        "score": 15,
        "question": "论述两个确立的决定性意义。",
        "referenceAnswer": "（1）两个确立是最重大政治成果。（2）理论意义：新思想实现马克思主义中国化新飞跃。（3）实践意义：取得历史性成就。（4）领导核心意义：应对风险挑战的根本保证。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  },
  {
    "id": "po-3",
    "category": "101",
    "order": 3,
    "title": "政治模拟卷（三）· 时政+综合冲刺",
    "difficulty": "中等+",
    "duration": 90,
    "totalScore": 50,
    "focus": "时政选择+跨板块综合分析",
    "questions": [
      {
        "id": 1,
        "type": "单选题",
        "score": 1,
        "question": "百年未有之大变局中最大变量是（  ）\nA.经济全球化 B.中国崛起 C.科技革命 D.国际格局调整",
        "referenceAnswer": "B。中国的发展崛起是最大的变量。",
        "tags": [
          "时政"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 2,
        "type": "单选题",
        "score": 1,
        "question": "一带一路核心原则是（  ）\nA.共商共建共享 B.和平共处五项原则 C.独立自主 D.对外开放",
        "referenceAnswer": "A。一带一路坚持共商共建共享原则。",
        "tags": [
          "时政"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 3,
        "type": "单选题",
        "score": 1,
        "question": "全球发展、安全、文明三大倡议提出者是（  ）\nA.联合国秘书长 B.习近平主席 C.美国总统 D.欧盟主席",
        "referenceAnswer": "B。三大倡议均由习近平主席提出。",
        "tags": [
          "时政"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 4,
        "type": "多选题",
        "score": 2,
        "question": "关于双碳目标正确的有（  ）\nA.2030年前碳达峰 B.2060年前碳中和 C.是西方强加的义务 D.需绿色低碳转型",
        "referenceAnswer": "ABD。双碳是中国主动承诺，C错误。",
        "tags": [
          "时政"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 5,
        "type": "多选题",
        "score": 2,
        "question": "新质生产力特征包括（  ）\nA.创新起主导作用 B.摆脱传统增长方式 C.符合新发展理念 D.高科技高效能高质量",
        "referenceAnswer": "ABCD。新质生产力由技术突破、要素创新配置、产业转型催生。",
        "tags": [
          "时政"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 6,
        "type": "多选题",
        "score": 2,
        "question": "人类命运共同体内涵包括（  ）\nA.持久和平 B.普遍安全 C.共同繁荣 D.开放包容 E.清洁美丽",
        "referenceAnswer": "ABCDE。建设五个维度的世界。",
        "tags": [
          "时政"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 7,
        "type": "单选题",
        "score": 1,
        "question": "中国式现代化本质要求居首位的是（  ）\nA.坚持党的领导 B.坚持中国特色社会主义 C.高质量发展 D.全过程人民民主",
        "referenceAnswer": "A。九条本质要求中党的领导居首位。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 8,
        "type": "多选题",
        "score": 2,
        "question": "属于二十大主题的是（  ）\nA.高举中国特色社会主义旗帜 B.贯彻新思想 C.弘扬伟大建党精神 D.为全面建设现代化国家而奋斗",
        "referenceAnswer": "ABCD。均为二十大主题内容。",
        "tags": [
          "时政"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 9,
        "type": "单选题",
        "score": 1,
        "question": "全面依法治国总抓手是（  ）\nA.宪法 B.中国特色社会主义法治体系 C.民法典 D.司法改革",
        "referenceAnswer": "B。法治体系是总抓手。",
        "tags": [
          "习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 10,
        "type": "多选题",
        "score": 2,
        "question": "关于自我革命正确的有（  ）\nA.跳出历史周期率第二个答案 B.以政治建设为统领 C.反腐败最彻底 D.不需要外部监督",
        "referenceAnswer": "ABC。自我革命不等于不需要监督，D错误。",
        "tags": [
          "党的建设"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 11,
        "type": "分析题",
        "score": 15,
        "question": "运用唯物辩证法关于发展实质的原理，论述发展新质生产力的必要性和路径。",
        "referenceAnswer": "一、发展实质是新事物产生旧事物灭亡。二、必要性：解决主要矛盾、应对国际竞争。三、路径：科技创新引领、产业升级、人才支撑、制度保障。",
        "tags": [
          "马原+时政"
        ],
        "selfAnswer": "",
        "selfScore": 0
      },
      {
        "id": 12,
        "type": "分析题",
        "score": 15,
        "question": "运用社会存在与社会意识辩证关系原理，论述坚定文化自信的必要性。",
        "referenceAnswer": "一、社会存在决定社会意识，社会意识有能动反作用。二、文化自信是更基本更深沉更持久的力量。三、应对西方文化冲击，增强国际话语权。四、推动传统文化创造性转化创新性发展。",
        "tags": [
          "马原+习思"
        ],
        "selfAnswer": "",
        "selfScore": 0
      }
    ]
  }
],
  getPapersByCategory: function(cid) {
    return this.allPapers.filter(function(p) { return p.category === cid; }).sort(function(a, b) { return a.order - b.order; });
  }
};
