type TeamData = {
  teamId: number;
  title: string;
  description: string;
  closeDueYmd: string;
  teamStatus: string;
  teamCapacityList: [
    {
      teamCapacityId: 0;
      roleDetail: string;
      roleMaxCount: 0;
      teamLead: true;
      careerRange: string;
      tagList: [string];
    },
  ];
  teamDetailStatus: string;
};
