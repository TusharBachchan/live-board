import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { MENU_ITEMS } from '@/constants'
import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { menuItemClick } from '@/slice/menuSlice'

const Menu = () => {
    const dispatch = useDispatch();
    const handleActiveMenuClick = (item) => {
        dispatch(menuItemClick(item));
    }
    return (
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper} onClick={() => handleActiveMenuClick(MENU_ITEMS.PENCIL)}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper} onClick={() => handleActiveMenuClick(MENU_ITEMS.ERASER)}>
                <FontAwesomeIcon icon={faEraser} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
            </div>
        </div>
    )
}

export default Menu