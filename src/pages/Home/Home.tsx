import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { setUserData, userData, userSelector, clearUserData } from '../../redux/userSlice'
import { useState } from 'react'

export function Home() {
  const { t } = useTranslation()
  const userStoreState = useSelector(userSelector)
  const [userDataLocal, setUserDataLocal] = useState({} as userData)
  const distpatch = useDispatch()

  const changeUserData = (key: 'email' | 'name', value: string) => {
    setUserDataLocal({ ...userDataLocal, [key]: value })
  }

  const persistUserDataHandler = () => distpatch(setUserData(userDataLocal))
  const clearUserDataHandler = () => distpatch(clearUserData())

  return (
    <div>
      {t('homeTitle')}
      <div>
        Name: <br />
        <input type="text" value={userDataLocal.name} onChange={e => changeUserData('name', e.target.value)} />
        <br />
        Email: <br />
        <input type="text" value={userDataLocal.email} onChange={e => changeUserData('email', e.target.value)} />
        <br />
        <button onClick={persistUserDataHandler}>Persist</button>
        <button onClick={clearUserDataHandler}>Clear</button>
        <br />
        <br />
        State user example: <br />
        Name: {userStoreState.name} <br />
        Email: {userStoreState.email}
      </div>
    </div>
  )
}
