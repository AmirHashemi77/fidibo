import { category } from "./category";

export const literature=category.find((item)=>item.id==='literature')
export const lifeStyle=category.find((item)=>item.id==='lifestyle')
export const psychology=category.find((item)=>item.id==='psychology')
export const art=category.find((item)=>item.id==='art')
export const management=category.find((item)=>item.id==='management')
export const history=category.find((item)=>item.id==='history')
export const scientific=category.find((item)=>item.id==='scientific')
export const socialScience=category.find((item)=>item.id==='social-science')
export const poetry=category.find((item)=>item.id==='poetry')
export const freeBook=category.find((item)=>item.id==='free-book')
export const education=category.find((item)=>item.id==='education')
export const religian=category.find((item)=>item.id==='religian')
export const philosophy=category.find((item)=>item.id==='philosophy')
export const podcastChannel=category.find((item)=>item.id==='podcast-channels').subset
export const popularPodcasts=podcastChannel.filter((item)=>item.tags==='پادکست های محبوب')
export const narrativePodcasts=podcastChannel.filter((item)=>item.tags==='پادکست های روایی')
export const psychologyPodcasts=podcastChannel.filter((item)=>item.tags==='پادکست های روانشناسی توسعه فردی')
export const scientificPodcasts=podcastChannel.filter((item)=>item.tags==='علم و تکنولوژی')
export const businessPodcasts=podcastChannel.filter((item)=>item.tags==='پادکست مدیریت کسب و کار')
export const historyPodcast=podcastChannel.filter((item)=>item.tags==='پادکست های تاریخی')
export const moviePodcasts=podcastChannel.filter((item)=>item.tags==='پادکست های سینمایی')
export const musicPodcasts=podcastChannel.filter((item)=>item.tags==='پادکست های موسیقی')
export const poetryPodcasts=podcastChannel.filter((item)=>item.tags==='پادکست های شعرو داستان')
const magazine=category.find((item)=>item.id==='magazines').subset
export const lifeStyleMagazine=magazine.filter((item)=>item.tags==='سبک زندگی')
export const artMagazine=magazine.filter((item)=>item.tags==='فرهنگی هنری')
export const socialMagazine=magazine.filter((item)=>item.tags==='اجتماعی')
export const economyMagazine=magazine.filter((item)=>item.tags==='مدیریت اقتصاد')
export const cinemaMagazine=magazine.filter((item)=>item.tags==='سینمایی')
