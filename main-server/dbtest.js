const { User: USERModel, List: LISTModel, Song: SONGModel } = require('./models');

//! UserId로 Lists 이름 및 사용자 정보 가져오기 예시
USERModel.findAll({
  where: { 
    id: 2,
  },
  include: [
    {
      model: LISTModel,
      required: true,
      attributes: ['name'],
    }
  ]
})
  .then((result) => {
    //console.log(result[0].Lists);
  });

//! ListId로 소속된 노래 정보 가져오기 예시
LISTModel.findAll({
  where: {
    id: 1
  },
  include: [{
    model: SONGModel,
    required: true,
    attributes: ['songNum', 'title'],
    through: {
      attributes: ['ListId', 'SongId']
    }
  }]
})
  .then((result) => {
    //console.log(result[0].Songs);
  });
