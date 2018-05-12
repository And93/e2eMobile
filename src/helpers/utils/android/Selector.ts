const uiSelector = "android=new UiSelector()";

export const Selector = Object.create({}, {

    text: {
        value: function (textContent: string): string {
            return `${uiSelector}.text("${textContent}")`;
        }
    },

    textAndClass: {
        value: function (textContent: string, nameClass: string): string {
            return `${uiSelector}.text("${textContent}").className("${nameClass}")`;
        }
    },

    index: {
        value: function (index: number): string {
            return `${uiSelector}.text("${index}")`;
        }
    },

    indexAndClass: {
        value: function (index: number, nameClass: string): string {
            return `${uiSelector}.index(${index}).className("${nameClass}")`;
        }
    },

    contentDisposition: {
        value: function (id: string): string {
            return `~${id}`;
        }
    }
});
