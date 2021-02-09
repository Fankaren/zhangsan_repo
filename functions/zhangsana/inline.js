module.exports = async (ctx) => {
    const search = (ctx.inlineQuery.query || "")
    if ( search==="" || isNaN(search)) {
        return
    } else {
        const answer = []
        const zhangsan = [2,3,4,5,6,7,8,9,10]
        zhangsan.forEach(function(zhangsan) {
            answer.push({
                id: zhangsan,
                title: zhangsan+" ("+search+" entre "+zhangsan+")",
                type: 'article',
                input_message_content: {
                    message_text: "Tocais cada uno a " + (Math.round(search/zhangsan)*100)/100+" ("+search+" entre "+zhangsan+")",
                    parse_mode: 'HTML'
                }
            })
        })
        return ctx.answerInlineQuery(answer)
    }
}