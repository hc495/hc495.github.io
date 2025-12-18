---
layout: subpage
permalink: /phd_defense
title: "Ph.D. Dissertation: The Mechanistic Basis of In-context Learning"
---

# Ph.D. Dissertation: The Mechanistic Basis of In-context Learning

This dissertation is composed of the following 4 peer-reviewed top-tier international conference papers. Notice that the author use the name Hakaze Cho in his publications.

Refer the [main page](https://www.hakaze-c.com/){:target="_blank"} for more publication details.

- Chapter 3: [Revisiting In-context Learning Inference Circuit in Large Language Models](https://openreview.net/forum?id=xizpnYNvQq){:target="_blank"} (ICLR 2025 Poster) [h5=362, IF=48.9, Core A*]
- Chapter 4: [Mechanism of Task-oriented Information Removal in In-context Learning](https://arxiv.org/abs/2509.21012){:target="_blank"}
- Chapter 5: [Token-based Decision Criteria Are Suboptimal in In-context Learning](https://aclanthology.org/2025.naacl-long.278/){:target="_blank"} (NAACL 2025 Long Paper) [h5=126, IF=16.5, Core A]
- Chapter 6: [Mechanistic Fine-tuning for In-context Learning](https://arxiv.org/abs/2505.14233){:target="_blank"} (BlackboxNLP Workshop at EMNLP 2025)

<font size="6"><span style='color:red'>Please note that all materials should remain internal until JST January 24th, 2026.</span></font>

## Resources for Final Defense

### Presentation Slides

Revision Note:

1. Removed some minor content from the slides to keep the story more clear and reduce the presentation time. In detail:
   1. Removed the analysis on the non-monotonicity of eccentricity of Chapter 4.
   2. Removed the discussion on the lower bound of information removal and the role of $W_\text{enc}$ and $W_\text{dec}$. 
2. Added “main contributions” in each chapter to handle the question “Chapter 3: Which part is new insight? What is the main contribution of this study?”.
3. We considered some of the questions in the pre-defense as issues of clarity and enhanced the detailed description of these questioned parts.
   1. We add a summary of experimental settings of each chapter in the slides to handle these questions:
      1. “Experiment with any other models? Because Llama is obsolete.”
      2. “Multi-modal, multilingual?”
      3. “Did you try with other models? And, was the results consistent across models?”
      4. “What other tasks did you try, or is it cherry-picked”
   2. For question “At which layer, which step were conducted?”, we put the Fig. 3.8 to the sildes.
   3. We add a detailed dependency graph of conclusions, and enhance the narrative to handle these questions:
      1. “Connection between theoretical part and hidden calibration?”
      2. “Chapter 5 and 6 seem unrelated to ICL.”
      3. “How is Chapter 6 inspired by the previous research?”
      4. “Connection between analysis and application?”
   Especially, we emphasized the relation of Chapter 5 and ICL, that is, the method in Chapter 5 activates LM's correct utilization of demonstrations. And the relation of Chapter 6 to ICL is clear, since the training is built on ICL samples.
   4. Revised the presentation details to handle these questions:
      1. “Why 3 steps? Which step is the most important one to ICL accuracy?” -> Emphasized the related works, and the ablation results.
      2. “Why did you adopt this 3-step framework among all other possible frameworks?” -> Emphasized the related works.
      3. “How did you define simple and difficult here? Why?” -> Emphasized: we use the perplexity as the difficult measure to align the previous works.
      4. “Kernel alignment: did you try other similarity metrics?” -> Described: Other metrcis are difficult to utilize in the scenario.
      5. “Did you investigate other types of forerunner tokens?” -> Added an instruction to refer to the Appendix.
      6. “Why did you use these two metrics?” -> Emphasized: the magnitude and correctness are two most important properties of information removal.
      7. “Can you describe Hidden Calibration?” -> Added a detailed description of Hidden Calibration.
4. Other questions, they are not in the main story, or future work related, so I write some instructions in the slides “such as ‘please refer to Appendix X’” but still want to leave it to the QA stage.

### Dissertation

**2025/12/05 Final**

The full dissertation with supplementary materials (Final version, 2025/12/05 revised): 

Revision Note:

- Added a discussion on the correlation between the work in Chapter 3 and its subsequent related works.
- Inserted the structural abstract required by the rule of JAIST Ph.D. dissertation.
- Revised 2 typos in Appendix.
- Revised some descriptions in Acknowledgement section for privacy consideration.

## Resources for Preliminary Defense

Preliminary Defense is passed.

Preliminary Defense Date: Dec 3rd, 2025.

### Presentation Slides

**2025/11/27 Original**

[Private] The slides for the Preliminary Defense: [PDF](https://jstorage.box.com/s/9ov8lpz3o2fl2805i9opg828eh8mi2zv){:target="_blank"}

### Dissertation

**2025/11/24 Revision**

[Private] The full dissertation with supplementary materials (Preliminary Defense version, 2025/11/24 revised): [PDF](https://jstorage.box.com/s/0ieqpurrjqm3a0h3nxlquzuhrc5vud6j){:target="_blank"}

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

## Other Online Resources

The source codes for every experimental chapter are available at the following GitHub repositories: 

- Chapter 3: [GitHub: ICL_Circuit](https://github.com/hc495/ICL_Circuit){:target="_blank"}
- Chapter 4: [GitHub: Verb_subspace](https://github.com/hc495/Verb_subspace){:target="_blank"} 
- Chapter 5: [GitHub: Hidden_Calibration](https://github.com/hc495/Hidden_Calibration){:target="_blank"}
- Chapter 6: [GitHub: ICL_head_tuning](https://github.com/hc495/ICL_head_tuning){:target="_blank"}