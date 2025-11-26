---
layout: page
permalink: /phd_defense
title: "Ph.D. Dissertation: The Mechanistic Basis of In-context Learning"
---

This dissertation is composed of the following 4 peer-reviewed top-tier international conference papers. Notice that the author use the name Hakaze Cho in his publications.

Refer the [main page](https://www.hakaze-c.com/){:target="_blank"} for more publication details.

- Chapter 3: [Revisiting In-context Learning Inference Circuit in Large Language Models](https://openreview.net/forum?id=xizpnYNvQq){:target="_blank"} (ICLR 2025 Poster) [h5=362, IF=48.9, Core A*]
- Chapter 4: [Mechanism of Task-oriented Information Removal in In-context Learning](https://arxiv.org/abs/2509.21012){:target="_blank"}
- Chapter 5: [Token-based Decision Criteria Are Suboptimal in In-context Learning](https://aclanthology.org/2025.naacl-long.278/){:target="_blank"} (NAACL 2025 Long Paper) [h5=126, IF=16.5, Core A]
- Chapter 6: [Mechanistic Fine-tuning for In-context Learning](https://arxiv.org/abs/2505.14233){:target="_blank"} (BlackboxNLP Workshop at EMNLP 2025)

## Resources for Preliminary Defense

<span style='color:red'>Please note that all materials should remain internal until JST January 24th, 2026.</span>

### Dissertation

**2025/11/24 Revision**

<span style='color:red'>The full dissertation with supplementary materials (Preliminary Defense version, 2025/11/24 revised):</span> [PDF](https://jstorage.box.com/s/0ieqpurrjqm3a0h3nxlquzuhrc5vud6j){:target="_blank"}

Revision Note:

- Removed all the descriptions about "under review" status to keep the safety of double-blind review.
- Merged the rebuttal revision into the Chapter 4.
   1. **[Paper Writing Framework]**
      1. We created a new Section 3 to unify the previously scattered descriptions of the experiment methodology and to establish a clearer logical progression of these methods.
      2. All experimental results have been moved to Section 4.
      3. In addition, to accommodate this restructuring, the previous Section 2.2 (Experiment Settings) has been moved into Section 4, rather than remaining in Section 2. Section 2 is now renamed “Background” and is used solely for related works.
      4. We also moderated the tempo of the paper, and added brief recalls of methodological details in the experiment section, so that we can help readers understand more easily, and do not need to jump back to Section 3 while reading Section 4.
      5. The "contribution summary" part has been rewritten.  
   This revision is almost entirely a replacement of paragraphs (with minor adjustments to transitional passages that are not central to the paper), and the technical content of the paper remains unchanged.
   2. **[Application & Amplifying the DH]** We have added an application prototype that enhances ICL performance by amplifying the DH outputs. This serves as a frugal and effective method prototype, especially in scenarios where labels contain noise. This addition has been included at the end of Section 4.4 (page 9), and the corresponding results are shown in Figure 14.
   3. **[Sensitivity of the Ablation Threshold]** (Appendix E) We added a discussion on the sensitivity of the ablation threshold, which confirms that any non-extreme threshold can reliably distinguish DHs from random heads. A footnote describing this result has also been added to the main text.
   4. **[Mathematical Grounding of Metrics]** (Appendix G) We added a mathematical proof for using covariance as an information measure. Specifically, we show that the covariance loading on principal component directions serves as an equivalent measure of entropy.
   5. **[Statistical Significance]** (Table 2) We have added the p-values of the ablation results of DH against RH. Specifically, these values represent the p-test probability of accepting the hypothesis that “the DHs are in a randomly sampled attention head set.”
   6. **[Generative Tasks]** (Appendix G) We added a discussion on generative tasks. Through eccentricity-based tests, we provide prototypical evidence that information removal also occurs in the English–Chinese translation task. Also, we include an additional limitation section concerning the complexity of the information filter.
   7. **[Numerical Results for Covariance out of Rank]** (Appendix I) We added numerical results for Covariance out of Rank.
   8. **[More Models]** We added experimental results for the 3B Instruct and 13B Instruct models. These results are broadly consistent with our main findings. Please see Table 2 and the Appendix I for details.
- Removed some of previous works judged as less relevant to the main content.
- Revised the title of one committee member.
- Fixed two writting issues in the Abstract section.
- Fixed one writting issue in Acknowledgement section.
- Revised some content in Acknowledgement section.
- Improved the clarity of Abstract section.
- Fixed one \ref issue in Appendix A.
- Unified the name of LMs across diffenerent Chapters. The new name is something like Name-Scale (e.g., GPT 2-Small, Llama 2-7B, etc.)
- Some adjustments on the layout of Chapter 6 to improve aesthetic.

**2025/10/30 Original**

The full dissertation with supplementary materials (Preliminary Defense version, original): [Old Version Download Closed]

### Presentation Slides

The slides for the Preliminary Defense: TBA

## Other Online Resources

The source codes for every experimental chapter are available at the following GitHub repositories: 

- Chapter 3: [GitHub: ICL_Circuit](https://github.com/hc495/ICL_Circuit){:target="_blank"}
- Chapter 4: [GitHub: Verb_subspace](https://github.com/hc495/Verb_subspace){:target="_blank"} (TBA)
- Chapter 5: [GitHub: Hidden_Calibration](https://github.com/hc495/Hidden_Calibration){:target="_blank"}
- Chapter 6: [GitHub: ICL_head_tuning](https://github.com/hc495/ICL_head_tuning){:target="_blank"}