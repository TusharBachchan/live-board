import styles from './index.module.css'
import {COLORS} from '../../constants'
import { useSelector } from 'react-redux'
import { MENU_ITEMS } from '../../constants'

const ToolBox = () => {
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const showStrokeColor = activeMenuItem === MENU_ITEMS.PENCIL;
    const showBrushSize = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

    const updateBrushSize = () => {

    }
    return (
        <div className={styles.toolboxContainer}>
            {showStrokeColor && <div className={styles.toolItem}>
                <h4>stroke color</h4>
                <div className={styles.itemContainer}>
                    <div className={styles.colorBox} style={{ backgroundColor: COLORS.BLACK }} />
                    <div className={styles.colorBox} style={{ backgroundColor: COLORS.RED }} />
                    <div className={styles.colorBox} style={{ backgroundColor: COLORS.GREEN }} />
                    <div className={styles.colorBox} style={{ backgroundColor: COLORS.BLUE }} />
                    <div className={styles.colorBox} style={{ backgroundColor: COLORS.ORANGE }} />
                    <div className={styles.colorBox} style={{ backgroundColor: COLORS.YELLOW }} />
                </div>
            </div>}
            {showBrushSize && <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Brush Size</h4>
                <div className={styles.itemContainer}>
                    <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
                </div>
            </div>}
            
        </div>
    )
}
export default ToolBox