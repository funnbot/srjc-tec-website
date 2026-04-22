import markdownIt from 'markdown-it';
import markdownItHighlight from 'markdown-it-highlightjs';
import markdownItMath, { type MarkdownItMathOptions } from 'markdown-it-math';

// Optional (with defaults)
const mathOptions: MarkdownItMathOptions = {
	inlineDelimiters: ['$', ['$`', '`$']],
	inlineAllowWhiteSpacePadding: false,
	blockDelimiters: '$$',
};

export const md = markdownIt()
	.use(markdownItMath, mathOptions)
	.use(markdownItHighlight);
