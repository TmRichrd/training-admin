import {post} from "@/utils/request"

export const loginWithDevice = (deviceId: string) => {
  return post('/auth/login_with_device', {
    device_id: deviceId,
    location: 'h5'
  })
}
export const getExamsList = (data: {
  page: number
  pagesize: number
  category_id: string
}) => {
  return post('/train/exams_list', data)
}

export const getTrainList = (data: {
  page: number
  pagesize: number
  category_id: string
}) => {
  return post('/train/train_list', data)
}

export const takeExam = (exam_id: string) => {
  return post('/train/take_exam', {
    exam_id
  })
}

export const submitExam = (user_exam_id: string) => {
  return post('/train/submit_exam', {
    user_exam_id
  })
}
export const getTopCategories = (data: {
  page: number
  pagesize: number
}) => {
  return post('/train/top_categories', data)
}

export const askQuestion = (data: {
  category_id: string
  question: string
  top_k: number
}) => {
  return post('/train/ask', data)
}
