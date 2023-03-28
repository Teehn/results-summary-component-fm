import './DetailsItem.css'
import { SummaryItem } from "../../App";
import MemorySvg from '../../assets/images/icon-memory.svg'
import VerbalSvg from '../../assets/images/icon-verbal.svg'
import VisualSvg from '../../assets/images/icon-visual.svg'
import ReactionSvg from '../../assets/images/icon-reaction.svg'


const svgMap = {
    "Memory": MemorySvg,
    "Verbal": VerbalSvg,
    "Visual": VisualSvg,
    "Reaction": ReactionSvg
} as any


export const DetailsItem = (props: SummaryItem) => {

    const {
        category,
        score,
    } = props


    return (
        <div className={`item-list svg-${category}`}>
            <div className="fade-in flex-items">
                <img src={svgMap[category]} width="20px" alt={`svg-${category}`} ></img>
                <div>
                    {category}
                </div>
            </div>
            <div>
                {score}<span> / 100</span>
            </div>
        </div>
    )
}