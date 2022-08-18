let creatBtn = function (template, nameClass, contentSetting) {
    let itemList = template.querySelector(nameClass).cloneNode(true);
    let itemContent = itemList.querySelectorAll(contentSetting.contentClass);

    for (let i = 0; i < itemContent.length; i++) {
        itemContent[i][contentSetting.contentType] = contentSetting.content[i];
    }

    return itemList;
}

export function repairFill(massData, generalClass, classContent, swipSetting) {
    for (let i = 0; i < massData.length; i++) {
        let block = document.querySelector(`.${massData[i].className}`);
        let itsRepair = block.classList.contains(generalClass);

        if (itsRepair) {
            let template = block.querySelector(`#${generalClass}-template`).content;
            let listSwiper = block.querySelector(swipSetting.swiperWrapperClass);
            let list = block.querySelector(swipSetting.noSwiperClass);

            let contentBlock = massData[i].content;
            let typeContent = massData[i].typeContent;

            for (let j = 0; j < contentBlock.length; j++) {
                let contentSetting = {
                    content: contentBlock[j],
                    contentType: typeContent,
                    contentClass: classContent
                };

                if (massData[i].unciverList) {
                    list.append(creatBtn(template, swipSetting.noSwipClass, contentSetting));
                }
                listSwiper.append(creatBtn(template, swipSetting.swipClass, contentSetting));
            }         
        }
    }
}

export function repairFillPrice(massData, generalClass, classContent, tableSetting) {
    for (let i = 0; i < massData.length; i++) {
        let block = document.querySelector(`.${massData[i].className}`);
        let itsRepair = block.classList.contains(generalClass);

        if (itsRepair) {
            let template = block.querySelector(`#${generalClass}-template`).content;
            let list = block.querySelector(tableSetting.tableClass);

            let contentBlock = massData[i].content;
            let typeContent = massData[i].typeContent;

            for (let j = 0; j < contentBlock.length; j++) {
                let contentSetting = {
                    content: contentBlock[j],
                    contentType: typeContent,
                    contentClass: classContent
                };

                list.append(creatBtn(template, tableSetting.noSwiperClass, contentSetting));
            }         
        }
    }
}