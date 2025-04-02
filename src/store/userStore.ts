export interface userInfoProps {
  token: string
  user_id: string
  invite_code: string
  invite_link: string
  parent_user_id: string
  name?: string
  avatar: string
  is_agent: boolean
  bio?: string
  phone?: string
  email?: string
}

export const useUserStore = defineStore(
  'user',
  () => {
    const state = reactive<userInfoProps>({
      token: '',
      user_id: '',
      invite_code: '',
      invite_link: '',
      parent_user_id: '',
      avatar: '',
      name: undefined,
      is_agent: false,
      bio: '',
      phone: '',
      email: '',
    })
    const change = (data: userInfoProps) => {
      state.token = data.token
      state.user_id = data.user_id
      state.invite_code = data.invite_code
      state.invite_link = data.invite_link
      state.parent_user_id = data.parent_user_id
      state.avatar = data.avatar
      state.name = data.name || undefined
      state.is_agent = data.is_agent || false
      state.bio = data.bio || ''
      state.phone = data.phone || ''
      state.email = data.email || ''
    }
    const setPhone = (data: string) => {
      state.phone = data
    }
    const setEmail = (data: string) => {
      state.email = data
    }
    const setName = (name: string) => {
      state.name = name
    }
    const setBio = (bio: string) => {
      state.bio = bio
    }
    const setAvatar = (avatar: string) => {
      state.avatar = avatar
    }
    return { state, change, setPhone, setEmail, setName, setBio, setAvatar }
  },
  {
    persist: true,
  }
)
